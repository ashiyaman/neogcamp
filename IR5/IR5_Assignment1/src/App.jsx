import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Header />
      <main className="container my-4">
        <section className="my-3">
          <img
            src="https://www.placehold.co/400x300?text=Players+Smiling"
            className="img-fluid"
          />
        </section>
        <section className="my-3">
          <h2>Our Players</h2>
          <p>
            Meet our talented team of players who work hard to achieve success
            on the field.
          </p>
          <Link to="/players" className="btn btn-primary">
            View Players
          </Link>
        </section>
        <section className="my-3">
          <h2>Team Performance</h2>
          <p>
            Explore our team's performance statistics to gain insights into our
            success on the field.
          </p>
          <Link to="/report" className="btn btn-primary">
            View Performance
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
