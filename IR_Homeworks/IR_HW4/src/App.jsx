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
            src="https://www.placehold.co/500x300?text=Employees+Smiling"
            className="img-fluid"
          />
        </section>
        <section className="my-4">
          <h2>Our Employees</h2>
          <p>
            Meet our dedicated team of professionals who work tirelessly to
            achieve our company's goals.
          </p>
          <Link to="/employees" className="btn btn-primary">
            View Employees
          </Link>
        </section>
        <section className="my-4">
          <h2>Company Report</h2>
          <p>
            Explore our latest financial report to gain insights into our
            company's growth and performance.
          </p>
          <Link to="/report" className="btn btn-primary">
            View Report
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
