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
  `chore`, `docs`), messages en anglais, sur une seule ligne claire et concise qui met en avant la tâche principale.
  Montrer le message avant tout push.
- **Pull Requests** : toute intégration dans `develop` passe par une PR, dans cet ordre :
  1. Créer la branche de travail à partir de `develop` à jour :
     `git switch develop && git pull && git switch -c feat/my-branch-name` ;
  2. Pousser la branche et donner le lien de création de la PR vers `develop`
     (`https://github.com/ValentinSILVESTRE/Portfolio/compare/develop...feat/my-branch-name?expand=1`) :
     `git push -u origin feat/my-branch-name` ;
  3. Attendre que Valentin ait validé la PR sur GitHub ;
  4. Fusionner la branche dans `develop` en local, puis pousser `develop` :
     `git switch develop && git pull && git merge --ff-only feat/my-branch-name && git push origin develop` ;
  5. Supprimer la branche de travail en local et sur GitHub :
     `git branch -d feat/my-branch-name && git push origin --delete feat/my-branch-name`.

  Ne jamais fusionner ni pousser `develop` avant la validation de la PR. Si le `--ff-only` échoue (`develop` a
  avancé entre-temps), rebaser la branche sur `develop` puis mettre à jour la PR :
  `git switch feat/my-branch-name && git rebase develop && git push --force-with-lease`,
  puis attendre une nouvelle validation de Valentin avant de reprendre à l'étape 4. En cas de conflit pendant le
  rebase, s'arrêter et demander à Valentin comment le résoudre.
- **`main`** : ne jamais pousser sur `main`, ni directement ni par fusion — c'est la production, gérée par Valentin.
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
