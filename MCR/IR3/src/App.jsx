import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="container text-center">
        <section className="my-4">
          <img
            src="https://placehold.co/1200x400"
            alt="Main image"
            className="img-fluid"
          />
        </section>
        <section className="my-4">
          <h3>Shopie</h3>
          <p>Welcome to the Shopie application!</p>
          <Link className="btn btn-primary" to="/products">
            Browse Products
          </Link>
        </section>
        <section className="my-4">
          <h3>Trending</h3>
          <p>Checkout our trending products</p>
          <div className="row">
            <div className="col-md-4 my-2">
              <img
                src="https://www.placehold.co/300x300"
                alt="Trending product 1"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.placehold.co/300x300"
                alt="Trending product 2"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.placehold.co/300x300"
                alt="Trending product 3"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
