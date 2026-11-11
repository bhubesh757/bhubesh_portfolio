# Bhubesh S R — React portfolio

A responsive portfolio built with React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion and Lucide React.

## Requirements
- Node.js 20.19+ or 22.12+ (Vite 7 requirement)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Personalize before publishing
Edit `src/data.ts`:
- `email`
- `linkedin`
- `github`

Review the Accenture role, project descriptions, certification name and impact metrics for accuracy. The impact figures are displayed as reported outcomes from project work. Update the copy if any figure or description should not be public.

## Deploy
- **Vercel:** import the GitHub repository. Framework preset: Vite. Build command: `npm run build`; output directory: `dist`.
- **Netlify:** build command `npm run build`; publish directory `dist`.
- **GitHub Pages:** configure the Vite `base` option if deploying to a repository subpath.

## Project structure
- `src/App.tsx` — page layout and interactive navigation
- `src/data.ts` — editable profile, skills, projects and experience content
- `src/components/SectionHeading.tsx` — reusable section heading component
- `src/styles.css` — responsive visual system
