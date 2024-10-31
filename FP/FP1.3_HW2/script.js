const movies = [
    {
      id: 1,
      title: 'Movie 1',
      genre: 'Thriller',
      year: 2002,
    },
    {
      id: 2,
      title: 'Movie 2',
      genre: 'Science Fiction',
      year: 2010,
    },
    {
      id: 3,
      title: 'Movie 3',
      genre: 'Comedy',
      year: 2018,
    },
  ];
  
  const movieList = document.querySelector('#movieList');
  const movieListItem = movies.map(
    (movie) => `
    <div>
      ID: ${movie.id}<br>
      Title: ${movie.title}<br>
      Genre: ${movie.genre}<br>
      Year: ${movie.year}<br>
      <hr>
    </div>
  `
  );
  movieList.innerHTML = movieListItem.join('');
  