import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/talleresdyg.com/",
  plugins: [react()],
  overlay: {
    warnings: false,
    errors: true,
  },
})
