# CV — Génération PDF (WeasyPrint)

Cet outil convertit le CV source (`index.html` + `css/style.css`) en PDF via
**WeasyPrint** (Python). Le PDF est écrit dans `../public/pdf/cv-william-nauroy-v2.pdf`,
le seul fichier publié par l'application portfolio.

## Prérequis

- [`uv`](https://docs.astral.sh/uv/) installé
- Python ≥ 3.14 (géré automatiquement par `uv` via `.python-version`)
- WeasyPrint peut nécessiter des dépendances système (Pango, Cairo, GDK-Pixbuf).
  Voir la [doc d'installation WeasyPrint](https://doc.courtbouillon.org/weasyprint/stable/first_steps.html)
  si la génération échoue.

Les dépendances Python (`weasyprint`) sont déclarées dans `pyproject.toml` et
verrouillées dans `uv.lock` ; `uv` synchronise l'environnement virtuel tout seul.

## Utilisation

Depuis la **racine du projet** :

```bash
npm run generate-pdf
```

Cette commande exécute `uv run --directory cv main.py`. En cas de succès, le PDF
est écrit (ou écrasé) dans `public/pdf/cv-william-nauroy-v2.pdf` et un message
`✅ Succès : ...` s'affiche.

On peut aussi lancer le script directement depuis ce dossier :

```bash
uv run main.py
```

## Fonctionnement

`main.py` :

1. Résout les chemins absolus de `index.html` et `css/style.css`.
2. Crée le dossier de sortie `public/pdf/` s'il n'existe pas.
3. Rend le HTML + CSS en PDF A4 avec WeasyPrint (`presentational_hints=True`).
4. En cas d'erreur, réactive les logs `DEBUG` pour afficher les warnings CSS,
   puis relève l'exception.

Chemins et sortie sont définis en tête de `main.py` :

```python
HTML_PATH   = cv/index.html
CSS_PATH    = cv/css/style.css
OUTPUT_PATH = public/pdf/cv-william-nauroy-v2.pdf
```

## Modifier le CV

Le contenu et le style ne sont **pas** dans le script Python :

- **Contenu** → `index.html`
- **Style / mise en page A4** → `css/style.css` (voir les variables `:root` et la
  section `@media print` / `@page`)

Après toute modification, régénérer le PDF avec `npm run generate-pdf` et vérifier
le rendu dans `public/pdf/cv-william-nauroy-v2.pdf` (c'est le PDF qui fait foi,
le rendu WeasyPrint pouvant différer légèrement d'un navigateur).
