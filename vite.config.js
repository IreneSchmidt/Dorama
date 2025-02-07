import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0', // Permite acesso externo
    port: 5173,
    strictPort: true // Evita mudança automática de porta
  }
})