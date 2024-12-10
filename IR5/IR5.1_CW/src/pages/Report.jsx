import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { moviesData } from './Movies.jsx';

const Report = () => {
  const mostWatchedMovie = moviesData.reduce(
    (acc, curr) => (acc.views > curr.views ? acc : curr),
    0
  );

  const highestRatedMovie = moviesData.reduce((acc, curr) =>
    acc.ratings > curr.ratings ? acc : curr
  );

  return (
    <>
      <Header />
      <main className="container my-4">
        <h2>Movie Report</h2>
        <hr />
        <h3>Most Watched Movie</h3>
        {mostWatchedMovie && (
          <>
            <p>Title: {mostWatchedMovie.title}</p>
            <p>Views: {mostWatchedMovie.views}</p>
          </>
        )}
        <h3>Highest Rated Movie</h3>
        {highestRatedMovie && (
          <>
            <p>Title: {highestRatedMovie.title}</p>
            <p>Rating: {highestRatedMovie.ratings}</p>
          </>
        )}
        <h3>Total Movies</h3>
        {moviesData.length > 0 ? <p>{moviesData.length}</p> : ``}
      </main>
      <Footer />
    </>
  );
};

export default Report;
