import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="container my-4">
        <h2>Featured Restaurants</h2>
        <section>
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Restaurant 1"
            className="img-fluid"
          />
          <h3 className="my-3">Taste of Italy</h3>
          <p>Italian | Rating: 4.5</p>
          <p>123 Albert Street, Brisbane, Australia.</p>
        </section>
        <section>
          <img
            src="https://media.istockphoto.com/id/537410478/photo/interior-of-mexican-restaurant.jpg?s=1024x1024&w=is&k=20&c=z873DfXJI7O9-o4yPvby7xtD0fuQ02t_ZPhG4OZ5aXI="
            alt="Restaurant 2"
            className="img-fluid"
          />
          <h3 className="my-3">Spice Village</h3>
          <p>Indian | Rating: 4.3</p>
          <p>45 Upper Mount Gravatt, Brisbane, Australia.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
