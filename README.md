# AGS Informatique - Africa's Global Services

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Hojgaetan/agsinformatique?include_prereleases)](https://github.com/Hojgaetan/agsinformatique/releases)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/Hojgaetan/agsinformatique/actions)

> Site web professionnel pour Africa's Global Services - Votre partenaire de confiance pour tous vos besoins informatiques à Dakar.

![Aperçu du site](/public/images/imagebanniere.png)

## But et objectifs du site

Ce site web a été conçu pour **Africa's Global Services (AGS Informatique)**, une entreprise sénégalaise spécialisée dans les solutions informatiques complètes. Le site vise à :

### Objectifs Principaux
- **Présenter nos services** : Vente de matériel, maintenance, réseaux & câblage, installation, support technique et consulting IT
- **Faciliter le contact** : Permettre aux clients de nous joindre rapidement via téléphone, email ou WhatsApp
- **Showcase de produits** : Mettre en avant notre large gamme de matériel informatique
- **Établir la confiance** : Démontrer notre expertise et notre engagement envers nos clients

### Valeurs Mises en Avant
- ⚡ **Intervention rapide** : Support disponible 24h/6j avec assistance d'urgence
- 🎯 **Solutions fiables** : Matériel de qualité et services professionnels
- 👥 **Équipe experte** : Techniciens qualifiés et expérimentés
- 🤝 **Satisfaction client** : Accompagnement personnalisé et suivi rigoureux

## Fonctionnalités

- ✅ Design moderne et responsive (mobile-first)
- ✅ Interface multilingue (français)
- ✅ Sections dynamiques : Services, Produits, À propos, Contact
- ✅ Formulaire de contact avec coordonnées directes
- ✅ Optimisation des performances (Vite + React)
- ✅ Composants UI réutilisables (Radix UI)
- ✅ Génération automatique des favicons et manifest PWA

## Stack technique

- **Framework Frontend** : React 18.3 avec TypeScript
- **Build Tool** : Vite 6.3 (avec plugin react-swc pour compilation rapide)
- **Styling** : Tailwind CSS avec composants Radix UI
- **Routage** : React Router DOM 6.30
- **Icônes** : Lucide React + React Icons
- **Thèmes** : next-themes pour support dark mode
- **Animations** : class-variance-authority, clsx

## Prérequis

- **Node.js** : version 20+ recommandée
- **npm** : version 9+ ou équivalent (yarn, pnpm)

## Installation

Clonez le dépôt et installez les dépendances :

```bash
git clone https://github.com/Hojgaetan/agsinformatique.git
cd agsinformatique
npm install
```

## Démarrer en développement

Lancez le serveur de développement :

```bash
npm run dev
```

Le site sera accessible sur **http://localhost:3000** et s'ouvrira automatiquement dans votre navigateur.

## Construire pour la production

Créez une version optimisée pour la production :

```bash
npm run build
```

Les fichiers de build seront générés dans le dossier `build/`.

## Prévisualiser la build

Pour tester la version de production localement :

```bash
npm run preview
```

## Structure du projet

```
agsinformatique/
├── public/                  # Fichiers statiques
│   ├── images/             # Images et logos
│   ├── favicon.ico         # Icônes générées
│   └── site.webmanifest    # Manifest PWA
├── scripts/                 # Scripts utilitaires
│   └── generate-favicons.mjs  # Génération favicons
├── src/
│   ├── components/         # Composants React
│   │   ├── ui/            # Composants UI de base (Radix)
│   │   ├── Hero.tsx       # Section héro
│   │   ├── Services.tsx   # Section services
│   │   ├── About.tsx      # Section à propos
│   │   └── Contact.tsx    # Section contact
│   ├── pages/             # Pages de l'application
│   ├── lib/               # Utilitaires et helpers
│   └── main.tsx           # Point d'entrée React
├── index.html             # Template HTML
├── vite.config.ts         # Configuration Vite
├── package.json           # Dépendances et scripts
├── app.json               # Configuration métadonnées app
└── README.md              # Documentation (ce fichier)
```

## Générer les favicons et le Web App Manifest

Le projet inclut un script pour générer automatiquement tous les formats de favicons et le manifest PWA à partir du logo source :

### Prérequis
Installez les dépendances nécessaires :

```bash
npm install --save-dev sharp to-ico
```

### Génération

```bash
node scripts/generate-favicons.mjs
```

Ce script génère :
- `favicon-16x16.png` et `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)
- `icon-192x192.png` et `icon-512x512.png` pour PWA
- `favicon.ico` (multi-résolution)
- `site.webmanifest` avec métadonnées app

**Source** : `public/images/logo-ags.jpg`

## Scripts disponibles

| Script | Description |
|--------|-------------|
| `npm run dev` | Lance le serveur de développement (port 3000) |
| `npm run build` | Crée une build de production dans `build/` |
| `npm run preview` | Prévisualise la build de production |

## Déploiement

Le site peut être déployé sur diverses plateformes :

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Netlify
1. Connectez votre dépôt GitHub à Netlify
2. Configuration build :
   - **Build command** : `npm run build`
   - **Publish directory** : `build`

### Autres plateformes
Le projet est compatible avec toute plateforme supportant les applications Vite/React statiques.

## Roadmap

- [ ] **SEO avancé** : Amélioration des métadonnées, sitemap, robots.txt
- [ ] **Analytics** : Intégration Google Analytics 4 ou Matomo
- [ ] **Internationalisation (i18n)** : Support FR/EN avec react-i18next
- [ ] **Tests E2E** : Ajout de tests Playwright ou Cypress
- [ ] **Tests unitaires** : Configuration Vitest + React Testing Library
- [ ] **Blog/Actualités** : Section pour articles et news
- [ ] **Espace client** : Portail de gestion des demandes de support
- [ ] **Catalogue produits dynamique** : Backend pour gestion du stock

## Release Notes

### v0.1.0 (2025-01-11)
**Version initiale**
- ✨ Structure de base du site avec React + Vite
- ✨ Sections principales : Accueil, Services, Produits, À propos, Contact
- ✨ Design responsive avec Tailwind CSS
- ✨ Composants UI basés sur Radix UI
- ✨ Informations de contact intégrées
- ✨ Génération automatique des favicons
- 📄 Documentation complète en français
- 📄 Licence MIT

## Contact

**Africa's Global Services - AGS Informatique**

📍 **Adresse** : 54x65 Geule Tapée, Résidence Cheikh Bamba NDIONGUE, Dakar, Sénégal

📞 **Téléphone** :
- +221 77 387 00 30
- +221 33 822 63 67

📧 **Email** :
- contact@africasglobalservices.sn
- contact@agsinformatique.sn

🚨 **Urgence** : +221 77 268 41 88

⏰ **Horaires** :
- Lundi - Vendredi : 8h00 - 18h00
- Samedi : 8h00 - 13h00
- Dimanche : Fermé

## Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

### Guidelines
- Suivez les conventions de code existantes
- Testez vos modifications en local
- Documentez les nouvelles fonctionnalités
- Assurez-vous que le build passe (`npm run build`)

## Intégration continue (CI)

Un workflow GitHub Actions peut être ajouté pour automatiser les tests et le déploiement :

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
```

## Sécurité

Pour signaler une vulnérabilité, consultez [SECURITY.md](SECURITY.md).

### Bonnes pratiques
- Mise à jour régulière des dépendances (`npm audit`)
- Pas de secrets dans le code source
- Variables d'environnement pour données sensibles
- HTTPS obligatoire en production

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

Copyright © 2025 Africa's Global Services. Tous droits réservés.

## Contributeurs

Merci à tous ceux qui ont contribué à ce projet !

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

---

**Développé avec ❤️ par l'équipe AGS Informatique**

Site web : [africasglobalservices.sn](http://africasglobalservices.sn) | Email : contact@agsinformatique.sn
