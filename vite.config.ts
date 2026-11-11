import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves production builds from /bhubesh_portfolio/.
// Keep the local Vite development server at the root path.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/bhubesh_portfolio/' : '/',
  plugins: [react(), tailwindcss()],
}))
