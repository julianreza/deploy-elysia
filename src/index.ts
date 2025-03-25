import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', () => {
    return {
      message: 'Hello from Bun Elysia on Vercel!',
      timestamp: new Date().toISOString()
    }
  }).listen(3000)