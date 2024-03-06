console.log(tempData);

const container = document.getElementById('container');

(function () {
    var moviesContainer = document.getElementById("box-11");
    var movieCards = tempData.map(function (pelicula) {
        var movieCard = document.createElement("div");
        movieCard.classList.add("box-1");
        movieCard.innerHTML = `
        <div class="content">
        <img src="${pelicula.poster}" alt="${pelicula.title}">
        <h3>${pelicula.title} (${pelicula.year})</h3>
        <p>Director: ${pelicula.director}</p>
        <p>Duración: ${pelicula.duration}</p>
        <p>Género: ${pelicula.genre.join(", ")}.</p>
        <p>Rate: ${pelicula.rate}</p>
        </div>
        `;
        return movieCard;
    });
    movieCards.forEach(function (card) {
        moviesContainer.appendChild(card);
    });
})();

