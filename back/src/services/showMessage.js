const Movie = require('../models/movie');

module.exports = {
    getAllMovies: async () => {
      const movies = await Movie.find();
      return movies;
    },
};