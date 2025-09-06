import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Repo-Namen anpassen: '/REPO_NAME/'
export default defineConfig({
  plugins: [react()],
  base: '/REPO_NAME/'
})
