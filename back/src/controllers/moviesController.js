const showMessage  = require('../services/showMessage');

const getMovies = async (req, res) => {
        const movies = await showMessage.getAllMovies();
        res.status(200).json(movies);
};

module.exports = {getMovies};