# Suivi du projet — Portfolio Valentin Silvestre

Dernière mise à jour : 21/10/26

## 🚧 En développement

## ✅ Fait

- **21/10/26**
    - Mise en ligne du CV sur [valentinsilvestre.com/cv/](https://valentinsilvestre.com/cv/), avec un lien depuis la
      page d'accueil, une URL canonique et une entrée dans le sitemap
    - Mise en avant du CV sur la page d'accueil : bouton « Voir mon CV » dans l'en-tête, phrase d'introduction et
      descriptions (meta, Open Graph) mises à jour, image d'aperçu régénérée
    - Lien « Retour au portfolio » en haut du CV, masqué à l'impression
    - Mise en production `v1.1.0`, et ajout à la procédure de release de la remise à jour de `develop` avec `main`
    - Ajout de l'étape « CV en ligne » dans la carte d'avancement de la page d'accueil (6 étapes sur 9)

- **30/09/26**
    - Ajout du CV dans le projet (`public/cv`) : page HTML/CSS/JS au format A4, imprimable sur une page, avec alerte en
      cas de dépassement

- **28/09/26**
    - Mise en place de la redirection `www.valentinsilvestre.com` → `valentinsilvestre.com`
    - Mise en ligne de l'ancien portfolio (Angular 13, front uniquement) sur
      [2022.valentinsilvestre.com](https://2022.valentinsilvestre.com), déployé depuis son dépôt
      [GitLab](https://gitlab.com/ValentinSILVESTRE/portfolio) sur un Worker Cloudflare dédié
    - Projets nécessitant l'API (Calendrier), aux fichiers manquants (Pokémon) ou hors ligne (MHB) signalés
      comme indisponibles sur l'ancien portfolio
    - Ajout d'un lien vers l'ancien portfolio sur la landing page
    - Refonte de la page d'accueil : carte de présentation du portfolio 2022 avec capture, carte d'avancement,
      mise en page sur deux colonnes pour les grands écrans
    - Réorganisation du fichier `style.scss` (sections, variables de thème, mixins)
    - Publication limitée au dossier `public/` : les fichiers du projet (README, CLAUDE.md, sources…) ne sont plus
      accessibles en ligne
    - Référencement : URL canonique, balises Open Graph avec image d'aperçu, données structurées, `robots.txt`,
      `sitemap.xml` et `noindex` sur les aperçus `*.workers.dev`
    - Mise en place du versionnement des mises en production (Semantic Versioning, tags Git)
    - Convention de titre et de description des Pull Requests
    - Protection de la branche `develop` contre la suppression (ruleset GitHub)

- **25/09/26**
    - Installation de Claude Code dans le terminal de PhpStorm
    - Ajout d'un `CLAUDE.md` décrivant le projet et les règles de travail pour Claude Code
    - Ajout d'un `.editorconfig` pour uniformiser le formatage entre éditeurs
    - Versionnement du `.gitattributes` (normalisation des fins de ligne en `LF`)
    - Mise en place du workflow par Pull Request vers `develop` (procédure documentée dans `CLAUDE.md`)
    - Protection de la branche `main` sur GitHub via un ruleset
    - Mise en place des aperçus Worker (Preview) pour la branche `develop`

- **18/09/26**
    - Mise en place de la ROADMAP
    - Mise en place de Sass/SCSS pour les styles de la page d'accueil

- **17/09/26**
    - Achat du nom de domaine `valentinsilvestre.com` via Cloudflare
    - Création de la landing page temporaire « Bientôt disponible » (HTML/CSS statique)
    - Mise en place du workflow Git
    - Configuration SSH pour l'authentification GitHub
    - Déploiement de la landing page via Cloudflare Workers
    - Connexion du domaine `valentinsilvestre.com` au Worker via une route

## 🔜 À venir

- [ ] Remplacer la landing page temporaire par l'ancien portfolio
- [ ] Développer le nouveau Portfolio
- [ ] Mettre en ligne le nouveau Portfolio
- [ ] Remplacer la landing page par le nouveau portfolio
- [ ] Développer l'API backend en Symfony
- [ ] Mettre en place une base de données PostgreSQL
- [ ] Héberger le backend Symfony sur Clever Cloud
- [ ] Configurer le sous-domaine `api.valentinsilvestre.com` (CNAME)
- [ ] Configurer CORS sur Symfony pour autoriser les appels depuis le frontend
- [ ] Mettre en place le déploiement continu (CI/CD) depuis la branche `main`
- [ ] Conteneuriser le backend avec Docker
