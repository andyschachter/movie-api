const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovie = (request, response) => {
  const movie = movies.filter((movie) => { return movie.title.toLowerCase().includes(request.params.id) ||
    movie.directors.toString().toLowerCase().includes(request.params.id) })

  return response.send(movie)
}

const addNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400)
      .send('The following fields are required: title, directors, releaseDate, rating, runTime, genres')
  }

  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = {
  getAllMovies,
  getMovie,
  addNewMovie
}
