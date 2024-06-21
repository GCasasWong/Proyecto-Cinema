const renderData = (tempData) => {
    const moviesContainer = document.getElementById("box-11");
    let movieCards = tempData.map(function(pelicula){
        let movieCard = document.createElement("div");
        movieCard.classList.add("box-1");
        movieCard.innerHTML = `
        <div class="card mb-2 bg-black text-white" style="width: 18rem;">

            <img src="${pelicula.poster}" class="card-img-top rounded" alt="${pelicula.title}">
            
            <div class="card-body">

                <h3 class="card-title text-center">${pelicula.title}</h3>

                <p class="card-text">Director: ${pelicula.director}</p>

                <p class="card-text">Duración: ${pelicula.duration}</p>

                <p class="card-text">Género: ${pelicula.genre.join(", ")}</p>

                <p class="card-text">Calificación: ${pelicula.rate}</p>

                <a href="#" class="btn btn-primary">Ver aquí</a>

            </div>
        </div>
        `;
        return movieCard;
    });
    movieCards.forEach(function (card) {
        moviesContainer.appendChild(card);
    });
};

module.exports = renderData;