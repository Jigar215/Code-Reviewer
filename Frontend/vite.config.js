// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // Exposes the app outside the container
    strictPort: true,  // Fails if port 5173 is already in use
    port: 5173,        // Explicitly sets the port
    watch: {
      usePolling: true // FIX: Ensures hot reload works on Windows/WSL
    }
  }
})