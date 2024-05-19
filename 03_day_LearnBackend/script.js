const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World Vivek G AND how are you feeling today')
})

app.listen(3000)