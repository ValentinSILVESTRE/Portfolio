# Portfolio — Valentin Silvestre

Portfolio personnel présentant mes projets de développement, accessible
sur [valentinsilvestre.com](https://valentinsilvestre.com).

En attendant la mise en production du nouveau portfolio, la page d'accueil présente le portfolio 2022 et l'avancement
du projet. Le suivi détaillé de l'avancement est disponible dans [ROADMAP.md](./ROADMAP.md).

## 📌 Statut actuel

Version `v1` en ligne : page d'accueil avec accès au [portfolio 2022](https://2022.valentinsilvestre.com) et
avancement du nouveau portfolio.

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
├── public/             # Fichiers publiés sur le site (seul dossier servi par Cloudflare)
│   ├── index.html      # Page d'accueil
│   ├── style.css       # CSS compilé (généré depuis style.scss)
│   ├── images/         # Capture du portfolio 2022, image d'aperçu pour les réseaux sociaux
│   ├── favicon.ico
│   ├── robots.txt      # Règles pour les robots d'indexation, lien vers le sitemap
│   ├── sitemap.xml     # Liste des pages à indexer
│   └── _headers        # En-têtes HTTP (noindex sur les aperçus *.workers.dev), non publié lui-même
├── style.scss          # Source Sass des styles
├── wrangler.jsonc      # Configuration du déploiement Cloudflare Workers
├── .editorconfig       # Règles de formatage partagées entre éditeurs
├── .gitattributes      # Traitement des fichiers par Git (fins de ligne, diff, export…)
├── CLAUDE.md           # Contexte et règles de travail pour Claude Code
├── ROADMAP.md          # Suivi détaillé de l'avancement
└── README.md           # Détails du projet
```

Tout ce qui est hors de `public/` (sources, documentation, configuration) n'est jamais publié.

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
npx sass style.scss public/style.css --style=expanded --no-source-map
```

## 🔍 Référencement (SEO)

- **Balises de la page** (`public/index.html`) : titre, description, URL canonique vers `valentinsilvestre.com`,
  balises Open Graph et Twitter pour l'aperçu lors d'un partage (image `images/og-image.jpg`, 1200 × 630),
  couleur de thème mobile et données structurées [`Person`](https://schema.org/Person) (JSON-LD).
- **`robots.txt` et `sitemap.xml`** : autorisent l'indexation et listent la page d'accueil. Cloudflare ajoute
  automatiquement en tête du `robots.txt` ses « content signals » destinés aux robots d'IA.
- **Aperçus non indexés** : `_headers` ajoute `X-Robots-Tag: noindex` sur les domaines `*.workers.dev`, pour que
  seule la production apparaisse dans les moteurs de recherche.

À chaque évolution de la page, mettre à jour la date `<lastmod>` du sitemap et, si l'apparence change nettement,
régénérer `images/og-image.jpg` (capture de la page en thème clair, 1200 × 630).

## 🌐 Domaine

- Production : [valentinsilvestre.com](https://valentinsilvestre.com)
- Développement : [develop-portfolio.valentin-silvestre.workers.dev](https://develop-portfolio.valentin-silvestre.workers.dev/)
- Ancien portfolio : [2022.valentinsilvestre.com](https://2022.valentinsilvestre.com), servi par un Worker distinct
  (Custom Domain) et déployé manuellement depuis son propre dépôt
  [GitLab](https://gitlab.com/ValentinSILVESTRE/portfolio)

`www.valentinsilvestre.com` redirige vers `valentinsilvestre.com` (301, chemin et paramètres conservés), via une
Redirect Rule Cloudflare (*Rules → Redirect Rules*) appliquée avant le Worker. Le sous-domaine `www` pointe vers un
enregistrement DNS `AAAA` proxifié vers `100::`, une adresse factice qui permet à Cloudflare d'intercepter la
requête.

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

### Protection des branches `main` et `develop`

Les deux branches permanentes sont protégées sur GitHub par un ruleset chacune (*Settings → Rules → Rulesets*).

`main` :

- **Restrict deletions** — `main` ne peut pas être supprimée
- **Block force pushes** — l'historique de `main` ne peut pas être réécrit
- **Require a pull request before merging** — aucun push direct, `develop` est fusionnée dans `main` via une Pull
  Request (0 approbation requise, GitHub n'autorisant pas l'approbation de sa propre PR)

`develop` :

- **Restrict deletions** — `develop` ne peut pas être supprimée, même par erreur après la fusion d'une PR
  `develop` → `main`
- Pas de Pull Request obligatoire : les branches de travail validées sont fusionnées en local puis `develop` est
  poussée directement
- Force pushes volontairement autorisés, pour pouvoir corriger l'historique de `develop` si nécessaire

### Commits — Conventional Commits

Ce projet suit la convention [Conventional Commits](https://www.conventionalcommits.org/) :

- `feat:` — nouvelle fonctionnalité
- `fix:` — correction de bug
- `build:` — configuration du build/déploiement
- `style:` — changements visuels/CSS
- `chore:` — tâches de maintenance
- `docs:` — documentation

### Pull Requests

Chaque Pull Request porte un titre explicite et une courte description.

- **Titre**
  - Fonctionnalité ou correction (`type/...` → `develop`) : au format Conventional Commits, en anglais,
    ex. `feat: redesign landing page with 2022 portfolio showcase`
  - Mise en production (`develop` → `main`) : `release: vX.Y.Z`, qui devient le message du commit de fusion sur
    `main`
- **Description** (en français) : ce qui change, comment c'est vérifié, et ce qu'il reste à faire après la fusion
  (vérifications, tag…)

### Versions — Semantic Versioning

Chaque mise en production (fusion de `develop` dans `main`) est marquée par un tag Git annoté sur `main`, au format
[Semantic Versioning](https://semver.org/lang/fr/) `vMAJEUR.MINEUR.CORRECTIF` :

- `MAJEUR` — refonte ou changement incompatible
- `MINEUR` — nouvelle fonctionnalité
- `CORRECTIF` — correction de bug

Versions majeures du projet :

- `v1` — page d'accueil présentant le portfolio 2022 et l'avancement du nouveau portfolio
- `v2` — nouveau portfolio complet (React + Symfony), à venir

Procédure, une fois la Pull Request `develop` → `main` fusionnée :

```bash
git switch main && git pull
git tag -a v1.0.0 -m "Short description of the release"
git push origin v1.0.0
```

Une Release GitHub peut ensuite être créée à partir du tag (*Releases → Draft a new release*), avec des notes
générées automatiquement depuis les commits (*Generate release notes*).

### Qualité de code — hook pre-commit

Un hook Git (`.git/hooks/pre-commit`) vérifie automatiquement, avant chaque commit, que tous les fichiers stagés se
terminent par un saut de ligne. S'il manque, il est ajouté et le fichier est re-stagé automatiquement.

Un fichier `.gitattributes` normalise également les fins de ligne en `LF` pour tout le projet, quel que soit
l'OS utilisé pour éditer.

### Formatage — EditorConfig

Un fichier `.editorconfig` définit les règles de formatage communes (encodage, indentation, saut de ligne final),
reconnues nativement par PhpStorm, VS Code et la plupart des éditeurs.
