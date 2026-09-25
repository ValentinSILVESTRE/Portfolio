# CLAUDE.md

Portfolio personnel de Valentin Silvestre, en ligne sur [valentinsilvestre.com](https://valentinsilvestre.com).
Le [README.md](./README.md) décrit le projet, la stack et les conventions ; [ROADMAP.md](./ROADMAP.md) suit l'avancement.

## Contexte

- État actuel : une landing page statique « Bientôt disponible » (`index.html` + `style.scss`) déployée sur
  Cloudflare Workers (static assets, `wrangler.jsonc`).
- Cible : frontend React (Cloudflare Workers) + API Symfony avec PostgreSQL (Clever Cloud), Docker à venir.
- L'objectif du projet est aussi pédagogique : privilégier les pratiques standards de l'écosystème et expliquer
  les choix plutôt qu'appliquer des raccourcis.

## Règles de travail

- **Langue** : échanger et rédiger la documentation en français.
- **Git** : ne lancer aucune commande Git qui modifie l'état du dépôt (`add`, `commit`, `rm`, `checkout`, `push`,
  `merge`…) sans demande explicite. Les commandes en lecture seule (`status`, `diff`, `log`) sont autorisées.
- **Branches** : GitHub Flow adapté — branches `type/description` créées depuis `develop`, fusion dans `develop`
  par PR, puis `develop` → `main` (le push sur `main` déclenche le déploiement en production).
- **Commits** : [Conventional Commits](https://www.conventionalcommits.org/) (`feat`, `fix`, `build`, `style`,
  `chore`, `docs`), messages en anglais.
- **Formatage** : respecter `.editorconfig` (LF, saut de ligne final, 4 espaces par défaut, 2 pour
  JS/JSON/SCSS/YAML/Markdown).

## Styles

`style.css` est généré, ne jamais le modifier à la main. Après chaque modification de `style.scss` :

```bash
npx sass style.scss style.css --style=expanded --no-source-map
```

## Documentation

- Mettre à jour `ROADMAP.md` quand une tâche est terminée : la déplacer dans « ✅ Fait » sous la date du jour
  (format `JJ/MM/AA`) et actualiser la ligne « Dernière mise à jour ».
- Mettre à jour la section « Structure du projet » du `README.md` quand un fichier ou un dossier est ajouté à la racine.
