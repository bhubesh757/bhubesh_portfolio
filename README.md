# Bhubesh S R — React portfolio

A responsive portfolio built with React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion and Lucide React.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```

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

Review the experience, project descriptions, certification name and impact metrics for accuracy before publishing.

## GitHub Pages CI/CD
This repository is configured to deploy to:

https://bhubesh757.github.io/bhubesh_portfolio/

The GitHub Actions workflow at `.github/workflows/deploy.yml` runs on every push to `main` and can also be started manually. It installs dependencies, runs ESLint, builds the Vite app and deploys the `dist` directory to GitHub Pages.

In the repository, open **Settings → Pages → Build and deployment** and select **GitHub Actions** as the source. Then check the **Actions** tab for the build and deployment status.

## Project structure
- `src/App.tsx` — page layout and interactive navigation
- `src/data.ts` — editable profile, skills, projects and experience content
- `src/components/SectionHeading.tsx` — reusable section heading component
- `src/styles.css` — responsive visual system
