import { Link } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { useState } from 'react';

export const moviesData = [
  {
    id: 1,
    title: 'Inception',
    genre: 'Sci-Fi',
    director: 'Christopher Nolan',
    views: 2000,
    ratings: 7,
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    director: 'Frank Darabont',
    views: 3000,
    ratings: 5,
  },
  {
    id: 3,
    title: 'Pulp Fiction',
    genre: 'Crime',
    director: 'Quentin Tarantino',
    views: 2500,
    ratings: 6,
  },
  {
    id: 4,
    title: 'The Godfather',
    genre: 'Crime',
    director: 'Francis Ford Coppola',
    views: 4000,
    ratings: 8,
  },
  {
    id: 5,
    title: 'The Dark Knight',
    genre: 'Action',
    director: 'Christopher Nolan',
    views: 5000,
    ratings: 7.5,
  },
];

const Movies = () => {
  const [genreFilter, setGenreFilter] = useState('All');

  const filteredMovies =
    genreFilter === 'All'
      ? moviesData
      : moviesData.filter((movie) => movie.genre === genreFilter);
  return (
    <>
      <Header />
      <main className="container my-4">
        <h1>List of Movies</h1>
        <div className="my-3">
          <label htmlFor="genreFilter">Filter By Genre: </label>
          <select
            id="genreFilter"
            onChange={(event) => setGenreFilter(event.target.value)}
            className="form-control"
          >
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Drama">Drama</option>
            <option value="Crime">Crime</option>
          </select>
        </div>

        <ul className="list-group my-4">
          {filteredMovies.map((movie) => (
            <li key={movie.id} className="list-group-item">
              <h5>{movie.title}</h5>
              <p>Genre: {movie.genre}</p>
              <p>Director: {movie.director}</p>
              <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
