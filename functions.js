const searchBar = document.getElementById("searchText");
const resultsContainer = document.getElementById("resultsContainer");

resultsContainer.innerHTML = "<p>loading...</p>";

fetch(`https://api.jikan.moe/v4/top/anime?q=&page=1&limit=12&order_by=score&sort=desc`)
  .then(response => response.json())
  .then(data => {
    resultsContainer.innerHTML = '<div id="resultsContainer"></div>';

    for (let i = 0; i < 12; i++) {
      const newResult = document.createElement("div");
      document.getElementById("resultsContainer").appendChild(newResult);
      newResult.className = "resultElement";

      const img = document.createElement("img");
      const isAiring = document.createElement("div");
      isAiring.className = "isAiring";
      const title = document.createElement("p");
      title.className = "title";
      const synopsis = document.createElement("p");
      synopsis.className = "synopsis";
      const score = document.createElement("div");
      score.className = "score";
      const icon = document.createElement("i");
      const episodes = document.createElement("p");
      episodes.className = "episodes";
      const genre = document.createElement("p");
      genre.className = "genres";
      const aired = document.createElement("p");
      aired.className = "aired";
      const duration = document.createElement("p");
      duration.className = "duration";
      const rating = document.createElement("p");
      rating.className = "rating";

      newResult.appendChild(img);
      newResult.appendChild(isAiring);
      newResult.appendChild(title);
      newResult.appendChild(synopsis);
      newResult.appendChild(score);
      newResult.appendChild(episodes);
      newResult.appendChild(genre);
      newResult.appendChild(rating);
      newResult.appendChild(duration);
      newResult.appendChild(aired);

      const anime = data.data[i];
      title.textContent = anime.title;
      anime.airing
        ? (isAiring.textContent = "Currently Airing")
        : (isAiring.textContent = "Finished Airing");

      img.src = anime.images.jpg.image_url;
      synopsis.textContent = `${anime.synopsis}`;
      score.textContent = ` ${anime.score} by ${anime.scored_by} people`;
      score.prepend(icon);
      icon.className = "fa-regular fa-star";
      episodes.textContent = `Episodes: ${anime.episodes}`;
      rating.textContent = `Rating: ${anime.rating}`;
      duration.textContent = `Duration: ${anime.duration}`;
      aired.textContent = `Aired: ${anime.aired.string}`;

      const genre_1 = anime.genres[0].name;
      let genre_2 = "";
      let genre_3 = "";

      anime.genres.length > 1
        ? (genre_2 = anime.genres[1].name)
        : console.error("null");
      anime.genres.length > 2
        ? (genre_3 = anime.genres[2].name)
        : console.error("null");

      genre.textContent = `Genre(s): ${genre_1} ${genre_2} ${genre_3}`;
    }
  })
  .catch(error => console.error(error));

// ------------------ SEARCH BAR FUNCTIONALITY ------------------

searchBar.addEventListener("keydown", event => {
  let searchText = searchBar.value.trim();

  if (event.key === "Enter") {
    resultsContainer.innerHTML = "<p>loading...</p>";

    if (searchText !== "") {
      if (searchText.slice(0, 8) !== "raiquery") {
        // Normal search
        fetch(`https://api.jikan.moe/v4/anime?q=${searchText}&page=1&limit=9`)
          .then(response => response.json())
          .then(data => {
            resultsContainer.innerHTML = '<div id="resultsContainer"></div>';

            for (let i = 0; i < 9; i++) {
              const newResult = document.createElement("div");
              document.getElementById("resultsContainer").appendChild(newResult);
              newResult.className = "resultElement";

              const img = document.createElement("img");
              const isAiring = document.createElement("div");
              isAiring.className = "isAiring";
              const title = document.createElement("p");
              title.className = "title";
              const synopsis = document.createElement("p");
              synopsis.className = "synopsis";
              const score = document.createElement("div");
              score.className = "score";
              const icon = document.createElement("i");
              const episodes = document.createElement("p");
              episodes.className = "episodes";
              const genre = document.createElement("p");
              genre.className = "genres";
              const aired = document.createElement("p");
              aired.className = "aired";
              const duration = document.createElement("p");
              duration.className = "duration";
              const rating = document.createElement("p");
              rating.className = "rating";

              newResult.appendChild(img);
              newResult.appendChild(isAiring);
              newResult.appendChild(title);
              newResult.appendChild(synopsis);
              newResult.appendChild(score);
              newResult.appendChild(episodes);
              newResult.appendChild(genre);
              newResult.appendChild(rating);
              newResult.appendChild(duration);
              newResult.appendChild(aired);

              const anime = data.data[i];
              title.textContent = anime.title;
              anime.airing
                ? (isAiring.textContent = "Currently Airing")
                : (isAiring.textContent = "Finished Airing");

              img.src = anime.images.jpg.image_url;
              synopsis.textContent = `${anime.synopsis}`;
              score.textContent = ` ${anime.score} by ${anime.scored_by} people`;
              score.prepend(icon);
              icon.className = "fa-regular fa-star";
              episodes.textContent = `Episodes: ${anime.episodes}`;
              rating.textContent = `Rating: ${anime.rating}`;
              duration.textContent = `Duration: ${anime.duration}`;
              aired.textContent = `Aired: ${anime.aired.string}`;

              const genre_1 = anime.genres[0].name;
              let genre_2 = "";
              let genre_3 = "";

              anime.genres.length > 1
                ? (genre_2 = anime.genres[1].name)
                : console.error("null");
              anime.genres.length > 2
                ? (genre_3 = anime.genres[2].name)
                : console.error("null");

              genre.textContent = `Genre(s): ${genre_1} ${genre_2} ${genre_3}`;
            }
          })
          .catch(error => console.error(error));

      } else {
        // raiquery search
        const raigenre = searchText.slice(
          searchText.indexOf("=") + 1,
          searchText.indexOf(".")
        );
        const railimit = searchText.slice(searchText.indexOf(".") + 1);

        fetch(
          `https://api.jikan.moe/v4/anime?genres=${raigenre}&page=1&limit=${railimit}&order_by=score&sort=desc`
        )
          .then(response => response.json())
          .then(data => {
            resultsContainer.innerHTML = '<div id="resultsContainer"></div>';

            for (let i = 0; i < 9; i++) {
              const newResult = document.createElement("div");
              document.getElementById("resultsContainer").appendChild(newResult);
              newResult.className = "resultElement";

              const img = document.createElement("img");
              const isAiring = document.createElement("div");
              isAiring.className = "isAiring";
              const title = document.createElement("p");
              title.className = "title";
              const synopsis = document.createElement("p");
              synopsis.className = "synopsis";
              const score = document.createElement("div");
              score.className = "score";
              const icon = document.createElement("i");
              const episodes = document.createElement("p");
              episodes.className = "episodes";
              const genre = document.createElement("p");
              genre.className = "genres";
              const aired = document.createElement("p");
              aired.className = "aired";
              const duration = document.createElement("p");
              duration.className = "duration";
              const rating = document.createElement("p");
              rating.className = "rating";

              newResult.appendChild(img);
              newResult.appendChild(isAiring);
              newResult.appendChild(title);
              newResult.appendChild(synopsis);
              newResult.appendChild(score);
              newResult.appendChild(episodes);
              newResult.appendChild(genre);
              newResult.appendChild(rating);
              newResult.appendChild(duration);
              newResult.appendChild(aired);

              const anime = data.data[i];
              title.textContent = anime.title;
              anime.airing
                ? (isAiring.textContent = "Currently Airing")
                : (isAiring.textContent = "Finished Airing");

              img.src = anime.images.jpg.image_url;
              synopsis.textContent = `${anime.synopsis}`;
              score.textContent = ` ${anime.score} by ${anime.scored_by} people`;
              score.prepend(icon);
              icon.className = "fa-regular fa-star";
              episodes.textContent = `Episodes: ${anime.episodes}`;
              rating.textContent = `Rating: ${anime.rating}`;
              duration.textContent = `Duration: ${anime.duration}`;
              aired.textContent = `Aired: ${anime.aired.string}`;

              const genre_1 = anime.genres[0].name;
              let genre_2 = "";
              let genre_3 = "";

              anime.genres.length > 1
                ? (genre_2 = anime.genres[1].name)
                : console.error("null");
              anime.genres.length > 2
                ? (genre_3 = anime.genres[2].name)
                : console.error("null");

              genre.textContent = `Genre(s): ${genre_1} ${genre_2} ${genre_3}`;
            }
          })
          .catch(error => console.error(error));
      }
    } else {
      resultsContainer.innerHTML =
        "<p style='color:red;'>No results for ''</p>";
    }
  }
});

// ------------------ GENRE SELECTION ------------------

function selectGenres() {
  document.getElementById("genreDiv").style.display = "block";
  document.getElementById("selectGenres").style.display = "none";
}

function searchGenres() {
  resultsContainer.innerHTML = "<p>loading...</p>";
  document.getElementById("genreDiv").style.display = "none";
  document.getElementById("selectGenres").style.display = "block";

  const genreSelect1 = document.getElementById("genreSelect1").value;
  const genreSelect2 = document.getElementById("genreSelect2").value;
  const genreSelect3 = document.getElementById("genreSelect3").value;
  const quantity = document.getElementById("quantity").value;

  fetch(
    `https://api.jikan.moe/v4/anime?genres=${genreSelect1},${genreSelect2},${genreSelect3}&page=1&limit=${quantity}&order_by=score&sort=desc`
  )
    .then(response => response.json())
    .then(data => {
      resultsContainer.innerHTML = '<div id="resultsContainer"></div>';

      for (let i = 0; i < quantity; i++) {
        const newResult = document.createElement("div");
        document.getElementById("resultsContainer").appendChild(newResult);
        newResult.className = "resultElement";

        const img = document.createElement("img");
        const isAiring = document.createElement("div");
        isAiring.className = "isAiring";
        const title = document.createElement("p");
        title.className = "title";
        const synopsis = document.createElement("p");
        synopsis.className = "synopsis";
        const score = document.createElement("div");
        score.className = "score";
        const icon = document.createElement("i");
        const episodes = document.createElement("p");
        episodes.className = "episodes";
        const genre = document.createElement("p");
        genre.className = "genres";
        const aired = document.createElement("p");
        aired.className = "aired";
        const duration = document.createElement("p");
        duration.className = "duration";
        const rating = document.createElement("p");
        rating.className = "rating";

        newResult.appendChild(img);
        newResult.appendChild(isAiring);
        newResult.appendChild(title);
        newResult.appendChild(synopsis);
        newResult.appendChild(score);
        newResult.appendChild(episodes);
        newResult.appendChild(genre);
        newResult.appendChild(rating);
        newResult.appendChild(duration);
        newResult.appendChild(aired);

        const anime = data.data[i];
        title.textContent = anime.title;
        anime.airing
          ? (isAiring.textContent = "Currently Airing")
          : (isAiring.textContent = "Finished Airing");

        img.src = anime.images.jpg.image_url;
        synopsis.textContent = `${anime.synopsis}`;
        score.textContent = ` ${anime.score} by ${anime.scored_by} people`;
        score.prepend(icon);
        icon.className = "fa-regular fa-star";
        episodes.textContent = `Episodes: ${anime.episodes}`;
        rating.textContent = `Rating: ${anime.rating}`;
        duration.textContent = `Duration: ${anime.duration}`;
        aired.textContent = `Aired: ${anime.aired.string}`;

        const genre_1 = anime.genres[0].name;
        let genre_2 = "";
        let genre_3 = "";

        anime.genres.length > 1
          ? (genre_2 = anime.genres[1].name)
          : console.error("null");
        anime.genres.length > 2
          ? (genre_3 = anime.genres[2].name)
          : console.error("null");

        genre.textContent = `Genre(s): ${genre_1} ${genre_2} ${genre_3}`;
      }
    })
    .catch(error => console.error(error));
}
