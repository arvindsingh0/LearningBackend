require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')           
})

app.get('/twitter', (req, res)=> {
  res.send('arvin')
})

app.get('/login', (req, res)=> {
    res.send('<h1> This is arvin learning backend</h1> ')
  })

  app.get('/youtube', (req, res)=> {
    res.send('<h2>Day 2</h2>')
  })


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})