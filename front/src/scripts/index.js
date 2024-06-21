const renderData = require( './renderData' );

const URL = 'http://localhost:3000/movies';

const axios = require("axios");

const getMovies = async () => {

    try {
        const data = await axios.get(URL);
        renderData(data.data);

    } catch (error) {
        alert("Las peliculas no se obtuvieron correctamente");
    }
}

getMovies();
