import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Header />
      <main className="container my-4 text-center">
        <section>
          <img
            src="https://img.freepik.com/free-photo/3d-illustration-pen-putting-blue-ticks-paper_107791-15675.jpg?t=st=1731859234~exp=1731862834~hmac=4b63f2f792b1ecc5060e88a8a50ea663f867803dcb18ecf7c243b793fb4c91f8"
            alt="Todo Image"
            className="img-fluid p-4"
          />
        </section>
        <section className="text-center">
          <h3>Todos</h3>
          <p>Welcome to the Todo Application!</p>
          <Link to="/todos" className="btn btn-primary">
            View Todos
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
