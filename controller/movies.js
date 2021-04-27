const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovie = (request, response) => {
  const movie = movies.filter((movie) => { return movie.title.toLowerCase().includes(request.params.id) ||
    movie.directors.toString().toLowerCase().includes(request.params.id) })

  return response.send(movie)
}

module.exports = {
  getAllMovies,
  getMovie
}
