import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this project from /bhubesh_portfolio/.
// Local development continues to use the root path.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/bhubesh_portfolio/' : '/',
  plugins: [react(), tailwindcss()],
})
