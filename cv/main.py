#!/usr/bin/env python3
"""
Génération du CV en PDF avec WeasyPrint.
Usage: python generate_pdf.py
"""
from weasyprint import HTML, CSS
from weasyprint.text.fonts import FontConfiguration
import os

# Chemins absolus pour éviter les erreurs de résolution
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
HTML_PATH = os.path.join(BASE_DIR, 'index.html')
CSS_PATH = os.path.join(BASE_DIR, 'css', 'style.css')
OUTPUT_PATH = os.path.join(BASE_DIR, '../public/pdf/cv-william-nauroy-v2.pdf')

# Création du dossier de sortie s'il n'existe pas
os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)

# Configuration des polices
font_config = FontConfiguration()

try:
    HTML(filename=HTML_PATH).write_pdf(
        target=OUTPUT_PATH,
        stylesheets=[CSS(filename=CSS_PATH)],
        font_config=font_config,
        presentational_hints=True
    )
    print(f"✅ Succès : {OUTPUT_PATH}")
except Exception as e:
    print(f"❌ Erreur : {e}")
    # Afficher les warnings CSS pour déboguer
    import logging
    logging.basicConfig(level=logging.DEBUG)
    raise
