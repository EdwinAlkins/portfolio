#!/usr/bin/env node
// Mini serveur local pour l'éditeur graphique de public/db.json.
// Aucune dépendance : node:http + node:fs. Rien de tout ceci ne part dans le build Vite.
//
//   npm run db-editor   ->  http://127.0.0.1:5174

import { createServer } from 'node:http';
import { copyFileSync, existsSync, readFileSync, writeFileSync, statSync, createReadStream } from 'node:fs';
import { dirname, join, normalize, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..');
const PUBLIC_DIR = join(ROOT, 'public');
const DB_PATH = join(PUBLIC_DIR, 'db.json');
const INDEX_PATH = join(HERE, 'index.html');
const PORT = Number(process.env.PORT) || 5174;

if (!existsSync(DB_PATH)) {
  console.error(`db.json introuvable : ${DB_PATH}`);
  process.exit(1);
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.avif': 'image/avif',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ogg': 'video/ogg',
  '.pdf': 'application/pdf',
  '.md': 'text/markdown; charset=utf-8',
};

const send = (res, status, body, type = 'text/plain; charset=utf-8') => {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  res.end(body);
};

const readBody = (req) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (c) => {
      size += c.length;
      // Le db fait quelques dizaines de Ko ; 20 Mo est une borne large mais finie.
      if (size > 20 * 1024 * 1024) reject(new Error('corps trop volumineux'));
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
    req.on('error', reject);
  });

// Sert un fichier de public/ (aperçu des images référencées en /portfolio/...).
const servePublicFile = (res, urlPath) => {
  const rel = normalize(decodeURIComponent(urlPath.replace(/^\/public\//, ''))).replace(/^(\.\.[/\\])+/, '');
  const file = join(PUBLIC_DIR, rel);
  if (!file.startsWith(PUBLIC_DIR) || !existsSync(file) || !statSync(file).isFile()) {
    return send(res, 404, 'not found');
  }
  res.writeHead(200, { 'Content-Type': MIME[extname(file).toLowerCase()] ?? 'application/octet-stream' });
  createReadStream(file).pipe(res);
};

const server = createServer(async (req, res) => {
  const url = (req.url ?? '/').split('?')[0];

  if (req.method === 'GET' && (url === '/' || url === '/index.html')) {
    return send(res, 200, readFileSync(INDEX_PATH, 'utf-8'), MIME['.html']);
  }

  if (req.method === 'GET' && url === '/api/db') {
    return send(res, 200, readFileSync(DB_PATH, 'utf-8'), MIME['.json']);
  }

  if (req.method === 'PUT' && url === '/api/db') {
    try {
      const body = await readBody(req);
      JSON.parse(body); // refuse d'écrire un JSON invalide
      copyFileSync(DB_PATH, `${DB_PATH}.bak`);
      writeFileSync(DB_PATH, body, 'utf-8');
      console.log(`[${new Date().toLocaleTimeString()}] db.json enregistré (sauvegarde : db.json.bak)`);
      return send(res, 200, JSON.stringify({ ok: true }), MIME['.json']);
    } catch (err) {
      return send(res, 400, JSON.stringify({ ok: false, error: String(err.message ?? err) }), MIME['.json']);
    }
  }

  if (req.method === 'GET' && url.startsWith('/public/')) {
    return servePublicFile(res, url);
  }

  send(res, 404, 'not found');
});

server.listen(PORT, '127.0.0.1', () => {
  const addr = `http://127.0.0.1:${PORT}`;
  console.log(`Éditeur db.json  ->  ${addr}`);
  console.log(`Fichier édité    : ${DB_PATH}`);
  const opener = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
  spawn(opener, [addr], { stdio: 'ignore', detached: true, shell: process.platform === 'win32' }).on('error', () => {});
});
