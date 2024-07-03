const axios = require('axios');

function clearForm(event) {
    if (event) {
        event.preventDefault();
    }
    document.getElementById('ActivityTitle').value = '';
    document.getElementById('ActivityYear').value = '';
    document.getElementById('ActivityDirector').value = '';
    document.getElementById('ActivityDuration').value = '';
    document.getElementById('ActivityGenre').value = '';
    document.getElementById('ActivityRate').value = '';
    document.getElementById('ActivityPoster').value = '';
}

async function verMovie(dataMovie) {
    try {
        const movie = dataMovie;
        await axios.post('http://localhost:3000/movies', movie);
    } catch (error) {
        alert("Error al crear la película");
    }
}

function convertToHoursAndMinutes(minutes) {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs}H ${mins}MIN`;
}

async function createMovie(event) {
    event.preventDefault();

    const isNumber = (value) => /^\d+$/.test(value);
    const hasFourDigits = (value) => /^\d{4}$/.test(value);
    const isValidUrl = (value) => /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(value);
    const isValidRate = (value) => !isNaN(value) && value >= 0 && value <= 10;

    const title = document.getElementById('ActivityTitle').value;
    const yearValue = document.getElementById('ActivityYear').value;
    const director = document.getElementById('ActivityDirector').value;
    const durationValue = document.getElementById('ActivityDuration').value;
    const genero = document.getElementById('ActivityGenre').value;
    const rateValue = document.getElementById('ActivityRate').value;
    const posterValue = document.getElementById('ActivityPoster').value;

    const year = isNumber(yearValue) && hasFourDigits(yearValue) ? yearValue : null;
    const duration = isNumber(durationValue) ? convertToHoursAndMinutes(durationValue) : null;
    const genre = genero.split(',').map(word => word.trim()).filter(word => word.length >= 2).join(',');
    const poster = isValidUrl(posterValue) ? posterValue : null;
    const rate = isValidRate(rateValue) ? rateValue : null;

    const camposRequeridosObj = { title, year, director, duration, genre, rate, poster };
    const camposRequeridos = ["title", "year", "director", "duration", "genre", "rate", "poster"];
    const camposFaltantes = camposRequeridos.filter(campo => !camposRequeridosObj[campo]);

    if (camposFaltantes.length > 0) {
        return alert(`Faltan los siguientes campos por llenarse: ${camposFaltantes.join(", ")}`);
    }

    const data = {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster
    };

    try {
        await verMovie(data);
        alert('Película creada exitosamente');
        clearForm();
    } catch (error) {
        alert("Error al crear la película");
    }
}

module.exports = { clearForm, createMovie };
