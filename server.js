const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Test object to pass to routes.
const testObject = {
  foo: {
    foo1: ['hello', 'world'],
    bar2: 2,
  }, 
  bar: {
    bar1: `I'm a coupon!`,
    bar2: { data: 'Fun Times' },
  }
}

// Test array to pass to routes.
const testArray = ['foo', 'bar', 'foobar']

app.prepare()
.then(() => {
  const server = express()

  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { testObject, testArray, id: req.params.id })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
