import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="container my-4">
        <h2>Overview</h2>
        <img
          src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Taj Mahal"
          className="img-fluid rounded my-3"
        />
        <p>
          The Taj Mahal is one of the most famous monuments in the world. It is
          located in Agra, India and is a symbol of eternal love. This stunning
          white marble mausoleum was built by Mughal emperor in memory of his
          beloved wife, Mumtaz Mahal.
        </p>
        <p>
          The Taj Mahal is not only a UNESCO World Heritage Site but also
          considered as one of the most beautiful architectural masterpieces in
          history.
        </p>
      </main>
      <Footer />
    </>
  );
}
