import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: replace /qualiopi-tracker/ with your repo name if different
export default defineConfig({
  plugins: [react()],
  base: '/qualiopi-tracker/',
})
