export default defineConfig({
  root: __dirname, // root je přímo projektový root
  plugins: [react()],
  build: {
    outDir: 'dist/client',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
      '@shared': path.resolve(__dirname, 'shared')
    }
  }
})
