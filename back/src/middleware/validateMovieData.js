function validateMovieData (req,res,next) {

    const { title, year, director, duration, genre, rate, poster } = req.body;
    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({ message: 'Faltan campos por llenar' });
    }
    const yearRegex = /^\d{4}$/;
    if (!yearRegex.test(year)) {
        return res.status(400).json({ message: 'El año debe ser un número de 4 dígitos' });
    }
    if (isNaN(rate) || rate < 0 || rate > 10) {
        return res.status(400).json({ message: 'La calificación debe ser un número entre 0 y 10' });
    }
    next();
}

module.exports = validateMovieData;