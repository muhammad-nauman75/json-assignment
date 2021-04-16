const input = document.querySelector(".input");
const type = document.querySelector("#movie-type");
const year = document.querySelector("#movie-years");
//console.log(input);
//http://www.omdbapi.com/?apikey=4dbd1e8b&i=tt1650062&plot=full
//&type=${type.value}&y=${year.value}

input.addEventListener("keyup", async function () {
  const url = `http://www.omdbapi.com/?apikey=4dbd1e8b&s=${input.value}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Something went wrong :(");
  const movies = await res.json();
  //console.log(data.Error);

  if (movies.Error) throw new Error("No result found");
  console.log(movies);

  var moviesList = "";

  for (const movie of movies.Search) {
    //console.log(movie);
    const moviesListHTML = `
      <div class="movie-box">
          <a onclick="movieInfo('${movie.imdbID}')" class="title" href="#">${movie.Title}</a>
          <a id="img-link" href="#"><img class="poster" src="${movie.Poster}" alt=""/></a>
          <p>${movie.Year}</p>
      </div>    
    `;
    moviesList += moviesListHTML;
  }
  document.querySelector(".movies-list").innerHTML = moviesList;
  const a = document.querySelectorAll(".title");
});

// document.querySelector(".title").addEventListener("click", function () {
//   console.log("hello");
// });

const movieInfo = async function (id) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=4dbd1e8b&i=${id}&plot=full`
  );
  if (!res.ok) throw new Error("Something Went wrong");
  const info = await res.json();
  console.log(info);
};
//movieInfo("tt1650062");
