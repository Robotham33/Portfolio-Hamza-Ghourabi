# Design System

## Direction

Le portfolio adopte une direction **Precision Systems** : premium, sombre, technique et calme.

L'interface doit évoquer un produit logiciel haut de gamme plutôt qu'un CV décoré. La sophistication vient de la composition, des détails, de la profondeur et du mouvement — jamais d'une accumulation d'effets.

## Principes visuels

1. **Clarté avant effet** — la hiérarchie et la lisibilité restent prioritaires.
2. **Profondeur maîtrisée** — surfaces translucides, lueurs et ombres sont discrètes.
3. **Accent rare** — le bleu lumineux sert à guider l'attention, pas à colorer chaque élément.
4. **Mouvement utile** — les animations expliquent la structure, l'état ou la progression.
5. **Crédibilité technique** — les visuels doivent raconter intégration, validation, automatisation et systèmes.
6. **Performance premium** — un effet visuel ne vaut pas une dégradation sensible du chargement ou de l'interaction.

## Palette

| Token | Valeur | Usage |
| --- | --- | --- |
| `--background` | `#05070c` | fond principal |
| `--background-elevated` | `#0a0f18` | zones élevées |
| `--foreground` | `#f7f9fc` | texte principal |
| `--muted-foreground` | `#98a7bd` | texte secondaire |
| `--accent` | `#8ab4ff` | accent principal |
| `--accent-strong` | `#6697ff` | interaction / focus |
| `--accent-cyan` | `#8ce0ff` | lumière secondaire ponctuelle |
| `--surface` | `rgba(255,255,255,.045)` | cartes légères |
| `--surface-strong` | `rgba(255,255,255,.075)` | hover / surface active |
| `--border` | `rgba(255,255,255,.10)` | séparateurs |
| `--border-strong` | `rgba(255,255,255,.17)` | focus / cartes prioritaires |

Les dégradés utilisent exclusivement les accents avec de faibles opacités. Aucun arc-en-ciel ni néon saturé.

## Typographie

La typographie doit rester nette, dense dans les labels techniques et ample dans les titres.

- Hero H1 : 52–84 px selon viewport, tracking négatif léger.
- Titres de section : 36–56 px.
- Corps principal : 18–20 px.
- Corps secondaire : 14–16 px.
- Labels : 11–13 px, uppercase uniquement pour les micro-labels techniques.
- Largeur maximale d'un paragraphe : environ 65 caractères.

La graisse `600` est privilégiée pour les grands titres. Éviter les poids excessifs qui donnent un rendu marketing agressif.

## Layout

- Conteneur principal : environ 1200–1280 px.
- Espacement horizontal : 20–24 px mobile, 32 px desktop.
- Sections : 96–144 px de respiration verticale sur desktop.
- Hero : première vue presque plein écran sans forcer exactement `100vh`.
- Grille : 12 colonnes conceptuelles, composition asymétrique autorisée.
- Les cartes ne doivent jamais donner une impression de dashboard administratif.

## Rayons et surfaces

- Petits contrôles : 12–14 px.
- Cartes : 20–28 px.
- Pills : rayon maximal.
- Les surfaces utilisent un fond semi-transparent et une bordure claire très faible.
- Le glassmorphism est limité aux éléments flottants comme la navbar et certaines cartes de premier plan.

## Ombres et lumière

- Ombre principale : large, diffuse et sombre.
- Glow : bleu, très diffus, faible opacité.
- Une seule zone lumineuse dominante par écran.
- Aucun `box-shadow` dur ou halo permanent autour de chaque composant.

## Motion

### Courbes

- Micro-interaction : `180–220 ms`.
- Entrée de composant : `420–520 ms`.
- Hero / mise en scène : `650–800 ms`.
- Easing principal : proche de `cubic-bezier(0.22, 1, 0.36, 1)`.

### Règles

- Déplacement d'entrée : 12–24 px maximum.
- Stagger discret : 50–90 ms.
- Hover : translation de 1–3 px maximum.
- Pas d'animation continue sur de gros éléments.
- `prefers-reduced-motion` doit être respecté.
- Les animations sont isolées dans `components/motion` ou dans un composant client dédié.

## Interaction

- Tous les éléments interactifs ont un état hover, active et focus-visible.
- Le focus clavier doit être visible sans casser l'esthétique.
- Les boutons principaux utilisent une surface claire ou un accent contenu.
- Les liens secondaires restent sobres avec une indication directionnelle légère.

## Iconographie

- Icônes linéaires simples.
- Taille et épaisseur cohérentes.
- Aucun pictogramme décoratif sans fonction.
- Les symboles système / pipeline peuvent être utilisés comme langage visuel technique.

## Visualisation technique

La première signature visuelle est un **integration pipeline** abstrait :

`Requirements → Integration → CI/CD → Validation → Release`

Il sert à raconter le métier sans exposer de données client ni reproduire une interface professionnelle confidentielle.

Les effets 3D / WebGL sont différés. Ils ne seront ajoutés que si une version mesurée apporte une valeur visuelle réelle sans détériorer les Core Web Vitals.

## Composants prioritaires

- Navbar flottante premium
- Hero
- Proof points / KPI
- Experience timeline
- Expertise clusters
- Project case studies
- Resume / CV viewer
- Contact panel
- Command palette
- Language switcher

## À éviter

- look gaming ;
- néons saturés ;
- barres de compétences en pourcentage ;
- cartes uniformes répétées partout ;
- animations gratuites ;
- parallaxe agressive ;
- carrousels inutiles ;
- texte trop petit au nom du minimalisme ;
- 3D lourde sans bénéfice produit.

## Qualité attendue

Chaque nouvelle section doit être revue sur quatre axes :

1. lisibilité et crédibilité ;
2. responsive mobile / desktop ;
3. accessibilité clavier et réduction des animations ;
4. coût performance et impact Lighthouse.
