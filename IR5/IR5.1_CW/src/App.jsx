import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="container my-4">
        <section className="my-3">
          <img
            src="https://www.placehold.co/500x300?text=Movies+Cover"
            className="left"
          />
        </section>
        <section className="my-4">
          <h2>Our Movies</h2>
          <p>
            Explore our collection of movies spanning various genres and themes.
          </p>
          <Link to="/movies" className="btn btn-primary">
            View Movies
          </Link>
        </section>
        <section className="my-4">
          <h2>Movie Recommendations</h2>
          <p>Check out our curated report on movies.</p>
          <Link to="/report" className="btn btn-primary">
            View Report
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
