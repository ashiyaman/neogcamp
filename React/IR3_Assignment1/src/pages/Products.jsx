import { Link } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Products = () => {
  return (
    <>
      <Header />
      <main className="container my-3">
        <h2 className="fw-normal my-2">Products</h2>
        <div className="card my-3">
          <div className="row p-2">
            <div className="col-md-4">
              <img src="https://www.placehold.co/300x300" />
            </div>
            <div className="col-md-8 py-3">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">
                Description of Product 1. Lorem ipsum dolor sit amet. Aut sequi
                laudantium hic quisquam labore qui ipsum quisquam.
              </p>
              <Link to="/products/1" className="btn btn-primary">
                View Product
              </Link>
            </div>
          </div>
        </div>
        <div className="card my-3">
          <div className="row p-2">
            <div className="col-md-4">
              <img src="https://www.placehold.co/300x300" alt="Product 2" />
            </div>
            <div className="col-md-8 py-3">
              <h5 className="card-title">Product 2</h5>
              <p className="card-text">
                Description of Product 2. Lorem ipsum dolor sit amet. Aut sequi
                laudantium hic quisquam labore qui ipsum quisquam.
              </p>
              <Link to="/products/2" className="btn btn-primary">
                Know More
              </Link>
            </div>
          </div>
        </div>
        <div className="card my-3">
          <div className="row p-2">
            <div className="col-md-4">
              <img src="https://www.placehold.co/300x300" alt="Product 3" />
            </div>
            <div className="col-md-8 py-3">
              <h5 className="card-title">Product 3</h5>
              <p className="card-text">
                Description of Product 3. Lorem ipsum dolor sit amet. Aut sequi
                laudantium hic quisquam labore qui ipsum quisquam.
              </p>
              <Link to="/products/3" className="btn btn-primary">
                View Product
              </Link>
            </div>
          </div>
        </div>
        <div className="card my-3">
          <div className="row p-2">
            <div className="col-md-4">
              <img src="https://www.placehold.co/300x300" alt="Product 4" />
            </div>
            <div className="col-md-8 py-3">
              <h5 className="card-title">Product 4</h5>
              <p className="card-text">
                Description of Product 4. Lorem ipsum dolor sit amet. Aut sequi
                laudantium hic quisquam labore qui ipsum quisquam.
              </p>
              <Link to="/products/4" className="btn btn-primary">
                View Product
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
