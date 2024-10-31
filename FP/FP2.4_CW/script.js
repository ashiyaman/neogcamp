const movieList = document.querySelector('#movieList');
const radioButtons = document.getElementsByName('genre');

const moviesData = [
  { id: 1, title: 'Movie 1', genre: 'Action' },
  { id: 2, title: 'Movie 2', genre: 'Comedy' },
  { id: 3, title: 'Movie 3', genre: 'Action' },
  { id: 4, title: 'Movie 4', genre: 'Comedy' },
  { id: 5, title: 'Movie 5', genre: 'Drama' },
];

const displayMovies = (selectedGenre) => {
  const movies =
    selectedGenre === 'All'
      ? moviesData
      : moviesData.filter((movie) => movie.genre === selectedGenre);

  const movieListHTML = movies.map(
    (movie) => `
    <li>
      <strong>ID: </strong>${movie.id}<br>
      <strong>Title: </strong>${movie.title}<br>
      <strong>Genre: </strong>${movie.genre}<br>
    </li>
    <hr>
  `
  );
  movieList.innerHTML = movieListHTML.join('');
};

//for each is similar to map ut it will not return an array(it will just console/ attach event)
radioButtons.forEach((radioBtn) => {
  radioBtn.addEventListener('change', function () {
    displayMovies(this.value);
  });
});

displayMovies('All');
