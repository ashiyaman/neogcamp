import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Header />
      <main className="container my-3">
        <h2 className="fw-normal">Featured Products</h2>
        <div className="row">
          <div className="col-md-4 py-2">
            <div className="card">
              <img src="https://www.placehold.co/400x300" alt="Product 1" />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">
                  Description of Product 1. Lorem ipsum dolor sit amet. Aut
                  sequi laudantium hic quisquam labore qui ipsum quisquam.
                </p>
                <Link to="/products/1" className="btn btn-primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-2">
            <div className="card">
              <img src="https://www.placehold.co/400x300" alt="Product 2" />
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">
                  Description of Product 2. Lorem ipsum dolor sit amet. Aut
                  sequi laudantium hic quisquam labore qui ipsum quisquam.
                </p>
                <Link to="/products/2" className="btn btn-primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-2">
            <div className="card">
              <img src="https://www.placehold.co/400x300" alt="Product 3" />
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">
                  Description of Product 3. Lorem ipsum dolor sit amet. Aut
                  sequi laudantium hic quisquam labore qui ipsum quisquam.
                </p>
                <Link to="/products/3" className="btn btn-primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
