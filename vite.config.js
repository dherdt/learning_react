import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/learning_react",
  plugins: [react()],
  server: {
    // Allows the server to be accessible outside the container
    host: '0.0.0.0',
    port: 5173,
    // Ensures HMR works through the VS Code port forward
    hmr: {
      clientPort: 5173,
    },
    // Required if you are on Windows/WSL and file changes aren't detected
    watch: {
      usePolling: true,
    }
  },
})
