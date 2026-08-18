import { Hono } from 'hono'

const app = new Hono()

const text_strings = ['Heyyy bihh why you using my api? huh...', 'oouu shii secret route oml']

app.get('/', (c) => {
  return c.text(text_strings[0])
})

app.get('/secret', (c) => {
  return c.text(text_strings[1])
})

app.get('/hello', (c) => {
  return c.json({
    ok: true,
    message: 'hi gangalanga',
  })
})

export default app