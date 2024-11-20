import { Link } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Stays() {
  return (
    <>
      <Header />
      <div className="container my-4">
        <h1>Featured Stays</h1>
        <div className="card my-2">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://media.istockphoto.com/id/1407964289/photo/sultan-palace-in-muscat-oman.jpg?s=1024x1024&w=is&k=20&c=olZX1WDRZ3uLBijogmkNT87kzLiewX_313kICTRpE30="
                alt="Tajmahal view house"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title my-2">
                  Luxurious Taj Mahal view House
                </h5>
                <p className="card-text">
                  Wake up to a braethtaking view of the Taj Mahal from this
                  luxurious house. Explore the rich history and the beauty of
                  the iconic monument right from your window.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last Updated 3 minutes ago
                  </small>
                </p>
                <Link to="/stays/1" className="btn btn-primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-2">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1686782502386-f3f3114ed9b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cozy retreat in the mountains"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Cozy retreat in the mountains</h5>
                <p className="card-text">
                  Escape to the mountains with this cozy mountain retreat. Enjoy
                  tranquility and stunning views while being surrounded by lush
                  green forests and fresh mountain air.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last Updated 18 minutes ago
                  </small>
                </p>
                <Link to="/stays/2" className="btn btn-primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-2">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://media.istockphoto.com/id/1424381465/photo/modern-villa-with-two-floors-overlooking-sea.jpg?s=1024x1024&w=is&k=20&c=H2ZAsc3VwRB2AP8YN2BECa9pq3kTOLxhlc2r6s5vWt8="
                alt="Seaside Villa"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  Seaside Villa with private beach access
                </h5>
                <p className="card-text">
                  Indulge in luxury with this stunning seaside Villa. Relax on
                  pristine beaches, take a dig in the private pool and soak up
                  in the sun in this coastal retreat.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last Updated 53 minutes ago
                  </small>
                </p>
                <Link to="/stays/3" className="btn btn-primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-2">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://media.istockphoto.com/id/2163132098/photo/residential-revolution.jpg?s=1024x1024&w=is&k=20&c=z9sh0TIMH67jHqA9usfyFEfjqozw8lnUmHxAUGCmd9s="
                alt="Modern loft in City center"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Modern Loft in the city center.</h5>
                <p className="card-text">
                  {' '}
                  Enjoy you stay in this stylish loft house situated in the
                  heart of the city. Close to restaurants, shops and
                  attractions. It's the perfect base for exploring the city.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last Updated 5 hours ago
                  </small>
                </p>
                <Link to="/stays/4" className="btn btn-primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
