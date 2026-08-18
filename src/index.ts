import { Hono } from 'hono'

const app = new Hono()

const text_strings = ['Heyyy bihh why you using my api? huh...', 'oouu shii secret route oml']

const tasks = ['do laundry']
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
  return c.json(`hello ${name} u look kawaiii today`)
})

app.get('/tasks', (c) => {
  return c.json(tasks)
})

app.get('/task/:id', (c) => {
  const id = c.req.param('id')
  const task = tasks[Number(id)]
  return c.json(task)
})

app.post('/tasks', async (c) => {
  const body = await c.req.json()

  tasks.push(body.title)
  return c.json({message: 'task created sucessfully', tasks}, 201)
})

app.delete('/tasks/:id', (c) => 
  c.text(`${c.req.param('id')} is deleted`)
)



export default app