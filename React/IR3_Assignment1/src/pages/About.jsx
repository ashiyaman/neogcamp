import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const About = () => {
  return (
    <>
      <Header />
      <main className="container my-3">
        <h2 className="fw-normal">About Our Ecommerce Platform</h2>
        <p>
          Welcome to our ecommerce platform! We are dedicated to providing
          customers with a seamless and enjoyable shopping experience from start
          to finish.
        </p>
        <p>
          Our mission is to offer a wide selection of high-quality products at
          competitive prices, coupled with exceptional customer service and fast
          shipping.
        </p>
        <p>
          At our ecommerce platform, we believe in the power of online shpping
          to connect people with the products they love, and we strive to make
          every interaction with our platform convenient, reliable and secure.
        </p>
        <p>
          Thank you for choosing our ecommerce platform. We look forward to
          serving you and exceeding your expectations at every turn.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
