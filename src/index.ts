import { Hono } from 'hono'

const app = new Hono()

let tasks = [{id: 0, title:'Heyyy bihh why you using my api? huh...'},  {id: 1, title:'ts task one gangaaa'}, {id: 2, title:'do nothingg'}]

let text_dicts = ['bihhh u fiound my secret huh? bet u victoria or some shi']

app.get('/', (c) => {
  return c.json(tasks)
})

app.get('/secret', (c) => {
  return c.json(text_dicts[0])
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
  const id = Number(c.req.param('id'))
  const task = tasks.find((t) => t.id === id)
  return c.json(task)
})

app.post('/task', async (c) => {
  const body = await c.req.json()

  tasks.push({id: Date.now(), title: body.title})
  return c.json({message: 'task created sucessfully', tasks}, 201)
})

app.delete('/tasks/:id', (c) => {
  const id = Number(c.req.param('id'))
  
  tasks = tasks.filter((t) => t.id !== id )
  
  return c.json({message: `${c.req.param('id')} is deleted`, tasks})
})

app.patch('/task/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const body = await c.req.json()

  const task = tasks.find((t) => t.id === id )

  
  
  if (task && body.title) {
    task.title = body.title
  }

  return c.json({message: "task updated", tasks})
})



export default app