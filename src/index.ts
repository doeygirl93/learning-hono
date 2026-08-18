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

app.get('/hello/:name', (c) => {
  const name = c.req.param('name')
  return c.json(`hello ${name} u look kawaii today`)
})

export default app