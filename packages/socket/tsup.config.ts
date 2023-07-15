import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['index.ts'],
  clean: true,
  dts: true,
  sourcemap: true,
  format: ['cjs', 'esm'],
})