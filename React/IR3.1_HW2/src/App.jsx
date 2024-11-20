import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <main className="container my-4">
      <h1 className="my-4">Latest Listings</h1>
      <section className="my-2">
        <img
          src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="House 1"
          className="img-fluid"
        />
        <h4 className="my-2">Cozy loft in city center</h4>
        <p>Entire loft - 2 guests - 1 bedroom - 1 bed - 1 bath</p>
        <p>
          Enjoy you stay in this stylish loft house situated in the heart of the
          city. Close to restaurants, shops and attractions. It's the perfect
          base for exploring the city.
        </p>
        <p>$120 per night</p>
      </section>
      <section className="my-2">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="House 2"
          className="img-fluid"
        />
        <h4 className="my-2">Beachfront Villa with Stunning views</h4>
        <p>Entire villa - 6 guests - 3 bedrooms - 3 beds - 2 baths</p>
        <p>
          Relax and unwind in this beachfront villa. Wake up to panaromic beach
          views, take a dip in the private pool and enjoy seamless
          indoor-outdoor living.
        </p>
        <p>$180 per night</p>
      </section>
    </main>
  );
}
