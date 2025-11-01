# Instructions pour pousser le tag de version

Un tag git a été créé localement pour la version 0.1.0.

## Tag créé
- **Tag** : v0.1.0
- **Commit** : 9cdd000
- **Message** : Version 0.1.0 - Release initiale

## Pour pousser le tag vers GitHub

Exécutez la commande suivante pour pousser le tag vers le dépôt distant :

```bash
git push origin v0.1.0
```

Ou pour pousser tous les tags :

```bash
git push origin --tags
```

## Créer une GitHub Release

Après avoir poussé le tag, vous pouvez créer une release GitHub :

1. Allez sur https://github.com/Hojgaetan/agsinformatique/releases/new
2. Sélectionnez le tag `v0.1.0`
3. Titre de la release : `Version 0.1.0 - Release Initiale`
4. Description : Copiez le contenu de la section v0.1.0 du CHANGELOG.md
5. Publiez la release

## Vérifier les tags

Pour voir tous les tags locaux :
```bash
git tag -l -n9
```

Pour voir les tags distants :
```bash
git ls-remote --tags origin
```

## Futures versions

Pour créer de nouvelles versions, suivez ce format :

```bash
# Version patch (0.1.1) - corrections de bugs
git tag -a v0.1.1 -m "Version 0.1.1 - Corrections de bugs"

# Version minor (0.2.0) - nouvelles fonctionnalités
git tag -a v0.2.0 -m "Version 0.2.0 - Ajout de fonctionnalités"

# Version major (1.0.0) - changements majeurs
git tag -a v1.0.0 -m "Version 1.0.0 - Release stable"
```

Puis poussez le tag :
```bash
git push origin <tag-name>
```

## Badge de version

Une fois la release créée sur GitHub, vous pouvez ajouter ce badge au README :

```markdown
[![Release](https://img.shields.io/github/v/release/Hojgaetan/agsinformatique)](https://github.com/Hojgaetan/agsinformatique/releases)
```
