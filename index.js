const express = require('express')
const bodyParser = require('body-parser')
const movies = require('./movies')
const { getAllMovies, getMovie} = require('./controller/movies')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:id', getMovie)

app.use(bodyParser.json())

app.post('/movies', (request, response) =>{

})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1343, () => {
  console.log('listening on port 1343...') // eslint-disable-line no-console
})
