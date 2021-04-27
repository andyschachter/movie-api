const express = require('express')
const bodyParser = require('body-parser')
const movies = require('./movies')

const app = express()

app.get('/movies', (request, response) => {
  return response.send(movies)
})

app.get('/movies/:id', (request, response) => {
  const movie = movies.filter((movie) => { return movie.title.toLowerCase().includes(request.params.id) ||
    movie.directors.toString().toLowerCase().includes(request.params.id) })

  return response.send(movie)
})

app.use(bodyParser.json())

app.post('/movies', (request, response) =>{

})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1343, () => {
  console.log('listening on port 1343...') // eslint-disable-line no-console
})
