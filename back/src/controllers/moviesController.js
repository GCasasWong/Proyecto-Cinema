const showMessage = require('../services/showMessage');

const getMovies = async (req, res) => {
        const movies = await showMessage.getAllMovies();
        res.status(201).json(movies);
};

const createMovies = async (req, res) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    try {
        const newMovie = await showMessage.createMovie({ title, year, director, duration, genre, rate, poster });
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createMovies, getMovies };