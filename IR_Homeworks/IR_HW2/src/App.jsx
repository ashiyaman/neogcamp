import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="container my-4">
        <h1 className="fw-normal">Overview</h1>
        <img
          src="https://media.gettyimages.com/id/1013238188/photo/cricket-eng-ind-practice.jpg?s=612x612&w=gi&k=20&c=efAHgyttbshLBr0j0bdF4d4d9WKSTBakZvTIVEMmHLY="
          className="img-fluid left rounded my-3"
        />
        <p>
          Virat Kohli born on November 5, 1998, in Delhi, India, is one of the
          world's leading cricketers. He is known for his aggressive batting and
          strong leadership as the captain of the Indian Cricket Team.
        </p>
        <p>
          Kohli is widely regarded as one of the greatest batsmen of all time.
          He holds the record as the highest run-scorer in T20I and IPL, ranks
          third in ODI, and stands as the fourth-highest in international
          cricket. He also holds the record for scoring the most centuries in
          ODI cricket and stands second in the list of most international
          centuries scored.
        </p>
      </main>
      <Footer />
    </>
  );
}
