import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add test config
  test: {
    environment: 'jsdom', // The test will take place in jsdom (virtual dom environment)
    globals: true // Some tests won't work without this
  }
})
