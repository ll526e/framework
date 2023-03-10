import { ServerOptions } from 'vite'

export const server: ServerOptions = {
  port: 5566,
  host: '0.0.0.0',
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}