function validateMovieData (req,res,next) {

    const { title, year, director, duration, genre, rate, poster } = req.body;
    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({ message: 'Faltan campos por rellenar' });

    }else {
        next();
    }
}

module.exports = validateMovieData;