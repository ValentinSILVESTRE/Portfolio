# Portfolio — Valentin Silvestre

Portfolio personnel présentant mes projets de développement, accessible
sur [valentinsilvestre.com](https://valentinsilvestre.com).

Une page d'accueil « Bientôt disponible » est en ligne en attendant la mise en production du portfolio complet.
Le suivi détaillé de l'avancement est disponible dans [ROADMAP.md](./ROADMAP.md).

## 📌 Statut actuel

Page d'accueil en ligne.

Développement du portfolio complet (React + Symfony) à venir, voir [ROADMAP.md](./ROADMAP.md) pour le détail.

## 🗂️ Stack technique

| Élément                     | Choix                                                                                                                                    | Justification                                                                                                               |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Frontend                    | <img src="https://img.shields.io/badge/-black?logo=react&logoColor=61DAFB" style="vertical-align:middle"> React                          | Plus léger et flexible qu'Angular, avec une prise en main plus rapide                                                       |
| Backend / API               | <img src="https://img.shields.io/badge/-black?logo=symfony&logoColor=white" style="vertical-align:middle"> Symfony                       | Structure MVC mature, plus adaptée aux architectures d'entreprise que Laravel (compétence déjà acquise)                     |
| Base de données             | <img src="https://img.shields.io/badge/-black?logo=postgresql&logoColor=4169E1" style="vertical-align:middle"> PostgreSQL                | Volonté de pratiquer un SGBD relationnel autre que MySQL, déjà maîtrisé                                                     |
| Styles                      | <img src="https://img.shields.io/badge/-black?logo=sass&logoColor=CC6699" style="vertical-align:middle"> Sass / SCSS                     | Code plus lisible et maintenable qu'en CSS pur                                                                              |
| Hébergement frontend        | <img src="https://img.shields.io/badge/-black?logo=cloudflareworkers&logoColor=F38020" style="vertical-align:middle"> Cloudflare Workers | Gratuit, moderne, CDN intégré et adapté à un trafic faible                                                                  |
| Hébergement backend         | <img src="https://img.shields.io/badge/-black?logo=clevercloud&logoColor=white" style="vertical-align:middle"> Clever Cloud              | Intégration native Symfony, facturation à l'usage                                                                           |
| Domaine                     | <img src="https://img.shields.io/badge/-black?logo=cloudflare&logoColor=F38020" style="vertical-align:middle"> Cloudflare                | Gestion DNS et SSL centralisée                                                                                              |
| Versioning                  | <img src="https://img.shields.io/badge/-black?logo=github&logoColor=white" style="vertical-align:middle"> GitHub                         | Intégrations natives avec Cloudflare/Clever Cloud, et volonté d'utiliser la plateforme la plus répandue professionnellement |
| Conteneurisation            | <img src="https://img.shields.io/badge/-black?logo=docker&logoColor=2496ED" style="vertical-align:middle"> Docker *(à venir)*            | Volonté d'approfondir une compétence largement utilisée en entreprise                                                       |
| Assistance au développement | <img src="https://img.shields.io/badge/-black?logo=claude&logoColor=D97757" style="vertical-align:middle"> Claude Code                   | Volonté de monter en compétence sur les outils d'IA appliqués au développement                                              |

## 📁 Structure du projet

```
.
├── index.html      # Page d'accueil
├── style.scss      # Source Sass des styles
├── style.css       # CSS compilé (généré depuis style.scss)
├── wrangler.jsonc  # Configuration du déploiement Cloudflare Workers
├── .editorconfig   # Règles de formatage partagées entre éditeurs
├── .gitattributes  # Traitement des fichiers par Git (fins de ligne, diff, export…)
├── CLAUDE.md       # Contexte et règles de travail pour Claude Code
├── ROADMAP.md      # Suivi détaillé de l'avancement
└── README.md       # Détails du projet
```

## 🚀 Déploiement

Le site est déployé automatiquement sur Cloudflare Workers à chaque push sur la branche `main`.

Pour déployer manuellement :

```bash
npx wrangler deploy
```

Les autres branches (dont `develop`) sont publiées en aperçu Worker (Preview) à chaque push, sans toucher à la
production. Chaque branche dispose de son propre aperçu, nommé d'après la branche, dont l'URL est indiquée dans le
détail du build sur Cloudflare.

Pour créer ou mettre à jour manuellement l'aperçu de la branche courante :

```bash
npx wrangler preview
```

Pour recompiler le CSS après une modification de `style.scss` :

```bash
npx sass style.scss style.css --style=expanded --no-source-map
```

## 🌐 Domaine

- Production : [valentinsilvestre.com](https://valentinsilvestre.com)
- Développement : [develop-portfolio.valentin-silvestre.workers.dev](https://develop-portfolio.valentin-silvestre.workers.dev/)

## 📝 Conventions

Ce projet suit des méthodologies reconnues plutôt que des règles maison, pour rester lisible par n'importe quel
développeur habitué aux standards de l'écosystème.

### Méthode de branching — GitHub Flow

- `main` est toujours déployable, c'est la branche de production
- `develop` sert d'environnement de test avant la mise en production
- Chaque tâche part de `develop` sur une branche dédiée (`feat/...`, `fix/...`)
- La branche est fusionnée dans `develop` via une Pull Request, après revue si besoin
- `develop` est ensuite fusionnée dans `main` une fois validée, ce qui déclenche le déploiement en production

Nommage des branches au format `type/description`, avec les mêmes préfixes que les commits :

- `feat/...` — nouvelle fonctionnalité
- `fix/...` — correction de bug
- `build/...` — configuration du build/déploiement
- `style/...` — changements visuels/CSS
- `chore/...` — tâche technique
- `docs/...` — documentation

### Protection de la branche `main`

La branche `main` est protégée sur GitHub par un ruleset (*Settings → Rules → Rulesets*) :

- **Restrict deletions** — `main` ne peut pas être supprimée
- **Block force pushes** — l'historique de `main` ne peut pas être réécrit
- **Require a pull request before merging** — aucun push direct, `develop` est fusionnée dans `main` via une Pull
  Request (0 approbation requise, GitHub n'autorisant pas l'approbation de sa propre PR)

### Commits — Conventional Commits

Ce projet suit la convention [Conventional Commits](https://www.conventionalcommits.org/) :

- `feat:` — nouvelle fonctionnalité
- `fix:` — correction de bug
- `build:` — configuration du build/déploiement
- `style:` — changements visuels/CSS
- `chore:` — tâches de maintenance
- `docs:` — documentation

### Qualité de code — hook pre-commit

Un hook Git (`.git/hooks/pre-commit`) vérifie automatiquement, avant chaque commit, que tous les fichiers stagés se
terminent par un saut de ligne. S'il manque, il est ajouté et le fichier est re-stagé automatiquement.

Un fichier `.gitattributes` normalise également les fins de ligne en `LF` pour tout le projet, quel que soit
l'OS utilisé pour éditer.

### Formatage — EditorConfig

Un fichier `.editorconfig` définit les règles de formatage communes (encodage, indentation, saut de ligne final),
reconnues nativement par PhpStorm, VS Code et la plupart des éditeurs.
