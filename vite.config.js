import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 777
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        home: 'index.html',
        home_two: 'home_two/index.html',
        home_three: 'home_three/index.html',
        home_four: 'home_four/index.html',
        home_dark: 'home_dark/index.html',
        about: 'about/index.html',
        services: 'services/index.html',
        contact: 'contact/index.html',
      },
    },
  },
})
