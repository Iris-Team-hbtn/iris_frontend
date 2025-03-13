import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'node:fs'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/iris_frontend/",
  server: {
    https: {
      key: fs.readFileSync('/etc/letsencrypt/live/34.44.177.109.nip.io/privkey.perm'),
      cert: fs.readFileSync('/etc/letsencrypt/live/34.44.177.109.nip.io/cert.pem')
    }
  },
  build: {
    outDir: 'build'
  }
})
