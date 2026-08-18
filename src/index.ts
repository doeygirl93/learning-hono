import { Hono } from 'hono'

const app = new Hono()

const text_strings = ['Heyyy bitch why you using my api', 'oouu shii secret route oml']

app.get('/', (c) => {
  return c.text(text_strings[0])
})

app.get('/secret', (c) => {
  return c.text(text_strings[1])
})

export default app