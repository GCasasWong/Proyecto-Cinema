const Movie = require('../models/Movie');

module.exports = {
    getAllMovies: async () => {
      try{
        return await Movie.find();
      } catch (error) {
        throw error;
      }
    },

    createMovie: async (movie) => { 
      try{
        const newMovie = await Movie.create(movie);
        return newMovie;
      }catch(error){
        throw error;
      }
    }
};
