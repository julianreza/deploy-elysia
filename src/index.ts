import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', () => {
    try {
      return 'Hello from Bun Elysia on Vercel!'
    } catch (error) {
      console.error('Unexpected error:', error)
      return { error: 'Internal Server Error' }
    }
  })
  .onError(({ error }) => {
    console.error('Unhandled error:', error)
    return new Response('Internal Server Error', { status: 500 })
  })
  .listen(3000)

export default app