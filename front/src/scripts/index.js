const renderData = require( './renderData' );
const {clearForm,createMovie} = require('./formulario');
const axios = require("axios");
const URL = 'http://localhost:3000/movies';

const getMovies = async () => {

    try {
        const data = await axios.get(URL);
        renderData(data.data);

    } catch (error) {
        alert("Las peliculas no se obtuvieron correctamente");
    }
}

const contenedor = document.getElementById('box-11');
if(contenedor){
    getMovies();
}

document.getElementById('ButtonClear').addEventListener('click',clearForm);
document.getElementById('submitForm').addEventListener('click',createMovie);