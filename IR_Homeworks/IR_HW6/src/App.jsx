import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section class="text-center">
          <img
            src="https://placehold.co/1500x400?text=Players+Banners"
            alt="Players Banner"
            className="img-fluid"
          />
        </section>
        <section class="bg-light py-4">
          <div class="container text-center">
            <h3>Cricket Player Database</h3>
            <p>Explore the profiles of your favorite cricket players.</p>
            <Link to="/players" className="btn btn-primary">
              Explore Players
            </Link>
          </div>
        </section>
        <section class="py-4">
          <div class="container text-center">
            <h3>Players Report</h3>
            <p>
              Explore our latest players report to gain insights into our ICC's
              performance and growth.
            </p>
            <Link to="/report" className="btn btn-primary">
              View Report
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
