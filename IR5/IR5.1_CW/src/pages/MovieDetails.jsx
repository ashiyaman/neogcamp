import { useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { moviesData } from './Movies.jsx';

const MovieDetails = () => {
  const movieId = useParams();

  const selectedMovie = moviesData.find((movie) => movie.id == movieId.movieId);

  return (
    <>
      <Header />
      <main className="container my-4">
        {selectedMovie && (
          <>
            <h2>{selectedMovie.title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Title: </strong>
                {selectedMovie.title}
              </li>
              <li className="list-group-item">
                <strong>Genre: </strong>
                {selectedMovie.genre}
              </li>
              <li className="list-group-item">
                <strong>Director: </strong>
                {selectedMovie.director}
              </li>
            </ul>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default MovieDetails;
