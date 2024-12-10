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
          src="https://img.freepik.com/free-psd/iphone-15-pro-mockup-front-back-view_1332-60588.jpg?t=st=1733232653~exp=1733236253~hmac=d2cb38d2c2735c91e987f46a771f4b92e3ed044496cb1426121669760b467ea9&w=360"
          className="img-fluid mx-auto my-3"
        />
        <p>
          Introducing the all-new iPhone 15, the latest innovation from Apple.
          Explore its incredible features, specifications and stunning design in
          this website.
        </p>
      </main>
      <Footer />
    </>
  );
}
