const movies = [
    { id: 1, title: 'Movie 1', rating: 4.5 },
    { id: 2, title: 'Movie 2', rating: 3.5 },
    { id: 3, title: 'Movie 3', rating: 3.8 },
    { id: 4, title: 'Movie 4', rating: 4.0 },
    { id: 5, title: 'Movie 5', rating: 4 },
  ];
  
  const moviesListContainer = document.querySelector('#moviesList');
  const avgRatingContainer = document.querySelector('#avgRating');
  
  const movieList = movies.reduce(
    (acc, curr) => {
      acc.totalRating += curr.rating;
      const liElement = document.createElement('li');
      liElement.textContent = `${curr.title} - Rating: ${curr.rating}`;
      moviesListContainer.appendChild(liElement);
  
      return acc;
    },
    { totalRating: 0 }
  );
  const avgRating = movieList.totalRating / movies.length;
  avgRatingContainer.textContent = avgRating;
  