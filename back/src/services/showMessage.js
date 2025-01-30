const Movie = require('../models/Movie');

module.exports = {
    getAllMovies: async () => {
        return await Movie.find();
    },

    createMovie: async (movie) => { 
        const newMovie = await Movie.create(movie);
        return newMovie;
    }
};
