import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function About() {
  return (
    <>
      <Header />
      <div className="container my-4">
        <h1>About Airbnb</h1>
        <p>
          Welcome to Airbnb! We are committed to revolutionizing the way people
          travel and experience the world. Our mission is to create a world
          where anyone can belong anywhere, and we strive to make travel
          accessible, authentic and unforgettable for everyone.
        </p>
        <p>
          At Airbnb, we believe in the power of human connection and the
          transformative nature of travel. Our global community of hosts and
          guests come together to share meaningful experiences, forge unique
          connections and create lifelong memories.
        </p>
        <p>
          Our diverse team is dedicated to building a platform that celebrates
          diversity, fosters inclusivity and promotes belongingness.
        </p>
        <p>
          Join us on this journey as we redefine travel and hospitality, one
          experience at a time. Whetehr you're a host or a guest, we invite you
          to be a part of our vibrant community and embark on extraordinary
          adventures around the globe.
        </p>
      </div>
      <Footer />
    </>
  );
}
