console.log(tempData);

const  data = tempData;

(function () {
    var moviesContainer = document.getElementById("box-11");
    var movieCards = data.map(function (pelicula) {
        var movieCard = document.createElement("div");
        movieCard.classList.add("box-1");
        movieCard.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${pelicula.poster}" class="card-img-top" alt="${pelicula.title}">
            <div class="card-body">
            <h3 class="card-title">${pelicula.title}</h3>
            <p class="card-text">Director: ${pelicula.director}</p>
            <p class="card-text">Duración: ${pelicula.duration}</p>
            <p class="card-text">Género: ${pelicula.genre.join(", ")}.</p>
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
}())
