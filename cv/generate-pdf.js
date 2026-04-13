/**
 * Script de conversion HTML vers PDF avec Puppeteer.
 * Usage: node generate-pdf.js
 * Le fichier PDF sera généré dans le dossier courant.
 */
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const htmlPath = path.resolve(__dirname, 'index.html');
  const outputPath = path.resolve(__dirname, '../pdf/cv-william-nauroy.pdf');

  console.log('🚀 Conversion HTML → PDF avec Puppeteer...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Charger le fichier HTML local
  await page.goto(`file://${htmlPath}`, {
    waitUntil: 'networkidle0',
  });

  // Générer le PDF format A4
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0mm',
      right: '0mm',
      bottom: '0mm',
      left: '0mm',
    },
  });

  await browser.close();

  console.log(`✅ PDF généré avec succès : ${outputPath}`);
})();
