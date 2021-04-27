const express = require('express')
const bodyParser = require('body-parser')
const movies = require('./movies')
const { request } = require('express')

const app = express()

app.get('/movies', (request, response) => {
  return response.send(movies)
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1343, () => {
  console.log('listening on port 1343...') // eslint-disable-line no-console
})
