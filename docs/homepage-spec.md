# Homepage Specification

## Objectif

La homepage doit obtenir trois résultats dans les premières secondes :

1. identifier immédiatement Hamza comme Software Integration & Validation Engineer ;
2. communiquer une expertise crédible en systèmes embarqués, intégration, validation, test automation et CI/CD ;
3. donner envie d'explorer le parcours, les projets et le CV.

## Structure cible

### 1. Navbar

Navbar flottante, compacte et translucide.

Contenu :

- identité `HG / Hamza Ghourabi` ;
- Expérience ;
- Projets ;
- Contact ;
- accès rapide à la prise de contact.

La future command palette et le switch FR / EN seront ajoutés dans une itération dédiée.

### 2. Hero

Composition desktop en deux colonnes asymétriques :

- gauche : positionnement, titre, résumé, CTA ;
- droite : visualisation technique du flux `Requirements → Integration → CI/CD → Validation → Release`.

Le Hero doit être fort sans dépendre d'une photo ou d'un effet 3D.

### 3. Proof points

Trois preuves immédiatement scannables, uniquement à partir d'informations validées :

- deux domaines : MedTech + automobile ;
- industrialisation : Jenkins + TeamCity ;
- continuum métier : intégration → validation.

Les métriques quantitatives de carrière seront ajoutées uniquement lorsqu'elles seront validées depuis le CV ou une autre source professionnelle.

### 4. About

Résumé professionnel court, davantage orienté valeur que biographie.

### 5. Experience

Timeline interactive avec aperçu des missions, responsabilités, environnements et outils publiables.

### 6. Expertise

Clusters orientés capacité :

- Software Integration ;
- Software Validation ;
- Embedded Systems ;
- Test Automation ;
- CI/CD ;
- Functional Validation.

Pas de pourcentage artificiel.

### 7. Projects

Case studies orientés problème → contribution → solution → résultat.

Les projets personnels peuvent montrer plus de détails techniques que les expériences client.

### 8. Resume

CV web interactif et accès au PDF lorsque le document source final est validé.

### 9. Contact

CTA final simple et professionnel avec LinkedIn, GitHub et moyens de contact validés.

### 10. Footer

Navigation secondaire, disponibilité des langues et mentions utiles.

## Responsive

### Mobile

- une seule colonne ;
- H1 fortement réduit mais toujours dominant ;
- pipeline transformé en flux vertical ;
- navbar avec navigation native compacte ;
- cartes proof points empilées ;
- aucun effet dépendant du hover.

### Desktop

- Hero asymétrique ;
- pipeline horizontal / diagonal léger ;
- respiration importante ;
- interactions hover discrètes.

## Performance

- Server Components par défaut ;
- composants clients uniquement pour Motion et interactions ;
- aucun WebGL dans le premier lot ;
- pas d'image LCP lourde ;
- le H1 et le résumé principal restent rendus immédiatement côté serveur, sans dépendre d'une animation ou de l'hydratation ;
- animations transform / opacity ;
- JS de homepage maintenu au strict nécessaire.

## Accessibilité

- ordre de lecture identique à l'ordre visuel ;
- focus visible ;
- navigation clavier ;
- contraste AA visé ;
- `prefers-reduced-motion` respecté ;
- labels explicites pour navigation et CTA.
