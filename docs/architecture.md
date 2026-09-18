# Architecture

## Stack cible

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion for React
- Vercel

## Structure

```text
app/
components/
  ui/
  sections/
  layout/
  motion/
content/
  experience/
  projects/
  skills/
lib/
public/
styles/
docs/
```

## Principes techniques

- composants réutilisables ;
- séparation contenu / présentation ;
- Server Components par défaut ;
- Client Components seulement lorsque nécessaire ;
- animations isolées dans `components/motion` ;
- données de contenu centralisées dans `content/` ;
- TypeScript strict ;
- revue par pull request.
