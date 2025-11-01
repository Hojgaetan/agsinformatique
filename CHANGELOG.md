# Changelog

Tous les changements notables de ce projet seront documentés dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [0.1.0] - 2025-01-11

### Ajouté
- Structure initiale du projet avec React 18.3 et Vite 6.3
- Configuration TypeScript pour une meilleure sécurité de type
- Intégration Tailwind CSS pour le styling
- Composants UI basés sur Radix UI (accordéon, dialog, dropdown, etc.)
- Système de routage avec React Router DOM
- Section Hero avec présentation de l'entreprise
- Section Services détaillant les 6 services principaux :
  - Vente de matériel informatique
  - Maintenance & Réparation
  - Réseaux & Câblage
  - Installation & Configuration
  - Support Technique
  - Consulting IT
- Section Produits avec 6 catégories de produits
- Section À Propos présentant les valeurs de l'entreprise
- Section Contact avec :
  - Informations de contact complètes (adresse, téléphones, emails)
  - Horaires d'ouverture
  - Numéro d'urgence
  - Boutons d'action rapide (Appeler, Email)
- Script de génération automatique des favicons et manifest PWA
- Configuration Vite optimisée :
  - Port de développement : 3000
  - Dossier de build : `build/`
  - Alias `@` pour `./src`
  - Plugin react-swc pour compilation rapide
- Documentation complète en français (README.md)
- Fichier LICENSE (MIT)
- Fichier CHANGELOG.md
- Fichier SECURITY.md pour la politique de sécurité
- Configuration app.json avec métadonnées complètes
- Badges dans le README (License, Vite, React, Tailwind, Build Status)
- Section Roadmap avec futures améliorations
- Section Release Notes
- Guidelines de contribution

### Configuration
- Node.js 20+ recommandé
- npm 9+ ou équivalent
- Build vers dossier `build/`
- Serveur de développement sur port 3000

### Dépendances Principales
- react: ^18.3.1
- react-dom: ^18.3.1
- react-router-dom: ^6.30.1
- @radix-ui/react-*: Composants UI modernes
- lucide-react: ^0.487.0 (icônes)
- react-icons: ^5.5.0
- tailwind-merge: classes utilitaires
- next-themes: ^0.4.6 (support thèmes)
- vite: 6.3.5
- @vitejs/plugin-react-swc: ^3.10.2

### Notes
- Version initiale du site web professionnel
- Interface responsive et moderne
- Prêt pour déploiement sur Vercel/Netlify
- Base solide pour futures améliorations (SEO, i18n, tests)

---

## Format des versions

- **[MAJOR.MINOR.PATCH]** - AAAA-MM-JJ
- **MAJOR** : Changements incompatibles de l'API
- **MINOR** : Ajout de fonctionnalités rétrocompatibles
- **PATCH** : Corrections de bugs rétrocompatibles

### Types de changements
- **Ajouté** : pour les nouvelles fonctionnalités
- **Modifié** : pour les changements dans les fonctionnalités existantes
- **Déprécié** : pour les fonctionnalités bientôt supprimées
- **Supprimé** : pour les fonctionnalités supprimées
- **Corrigé** : pour les corrections de bugs
- **Sécurité** : en cas de vulnérabilités

[0.1.0]: https://github.com/Hojgaetan/agsinformatique/releases/tag/v0.1.0
