// const { create } = require('../models/Movie');
const showMessage = require('../services/showMessage');
const catchAsync = require('../utils/catchAsync');

const getMovies = async (req, res) => {
      const movies = await showMessage.getAllMovies();
        res.status(201).json(movies);
};

const createMovies = async (req, res) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const newMovie = await showMessage.createMovie({ title, year, director, duration, genre, rate, poster });
    res.status(201).json(newMovie);
};

module.exports = { 
    createMovies: catchAsync(createMovies),
     getMovies: catchAsync(getMovies), 
    };