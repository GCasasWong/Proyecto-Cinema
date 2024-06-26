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

async function verMovie (dataMovie) {
    try{
        const movie = dataMovie;
        await axios.post('http://localhost:3000/movies', movie);
    }
    catch{
        alert("Error al crear la pelicula");
    }
};

async function createMovie (movie) {
    event.preventDefault();
    const title = document.getElementById('ActivityTitle').value;
    const year = document.getElementById('ActivityYear').value;
    const director = document.getElementById('ActivityDirector').value;
    const duration = document.getElementById('ActivityDuration').value;
    const genero = document.getElementById('ActivityGenre').value;
    const rate = document.getElementById('ActivityRate').value;
    const poster = document.getElementById('ActivityPoster').value;

    const genre= genero.split(' ').join(',');
    const isNumber = (value) => /^\d+$/.test(value);

    if (title && isNumber(year) && director && isNumber(duration) && genre && rate && poster) {
        const data = {title, year,director,duration,genre,rate,poster};
        try{
            await verMovie(data);
            alert('Pelicula creada exitosamente');
            clearForm();
            
    } catch(error){

    }

    } else {
        alert('Por favor, complete todos los campos correctamente');
    }
}

module.exports = {clearForm,createMovie};

