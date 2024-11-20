const Books = ({ books, genre }) => {
  const selectedBooks = books.filter(
    (book) => book.genre === 'Science Fiction'
  );
  return (
    <>
      <h2>Books</h2>
      {selectedBooks.map((book) => (
        <div key={book.id}>
          <p>Title: {book.title}</p>
          <p>Genre: {book.genre}</p>
        </div>
      ))}

      <hr />
    </>
  );
};

const Users = ({ users, role }) => {
  const selectedUser = users.filter((user) => user.role === role);
  return (
    <>
      <h2>Users</h2>
      {selectedUser.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Role: {user.role}</p>
        </div>
      ))}

      <hr />
    </>
  );
};

const Products = ({ products }) => {
  const selectedProducts = products.filter((product) => product.price > 100);
  return (
    <>
      <h2>Products</h2>
      {selectedProducts.map((product) => (
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Price: ${product.price}</p>
          <p>Color: {product.features.color}</p>
          <p>Waterproof: {product.features.isWaterProof ? `true` : `fasle`}</p>
        </div>
      ))}
      <hr />
    </>
  );
};

const Cities = ({ cities }) => {
  const selectedCities = cities.filter((city) => city.population > 1000000);
  return (
    <>
      <h2>Cities</h2>
      {selectedCities.map((city) => (
        <div key={city.id}>
          <p>Name: {city.name}</p>
          <p>Population: {city.population}</p>
        </div>
      ))}
      <hr />
    </>
  );
};

const Movies = ({ movies }) => {
  const selectedMovies = movies.filter((movie) => movie.releaseYear > 2015);
  return (
    <>
      <h2>Movies</h2>
      {selectedMovies.map((movie) => (
        <div key={movie.id}>
          <p>Title: {movie.title}</p>
          <p>Release Year: {movie.releaseYear}</p>
        </div>
      ))}
      <hr />
    </>
  );
};

const Podcasts = ({ podcasts }) => {
  const selectedPodcasts = podcasts.filter(
    (podcast) => podcast.featured === true
  );
  return (
    <>
      <h2>Podcasts</h2>
      {selectedPodcasts.map((podcast) => (
        <div key={podcast.id}>
          <p>Title: {podcast.title}</p>
          <p>Host: {podcast.host.join(', ')}</p>
          <p>Featured: {podcast.featured ? `true` : `false`}</p>
        </div>
      ))}
      <hr />
    </>
  );
};

const MoviesData = ({ moviesData }) => {
  const selectedMovies = moviesData.filter((movie) => movie.releaseYear > 2000);
  console.log(selectedMovies);
  const totalDuration = selectedMovies.reduce(
    (acc, curr) => acc + curr.duration,
    0
  );
  console.log(totalDuration);
  return (
    <div>
      <h2>Average Movie Duration</h2>
      <p>{totalDuration / selectedMovies.length} minutes</p>
      <hr />
    </div>
  );
};

const Tasks = ({ tasks }) => {
  const completedtasks = tasks.filter((task) => task.completed === true);
  return (
    <div>
      <h2>Total Number of tasks Completed:</h2>
      <p>{completedtasks.length}</p>
      <hr />
    </div>
  );
};

const Vehicles = ({ vehicles }) => {
  const totalDistance = vehicles.reduce((acc, curr) => acc + curr.distance, 0);
  return (
    <div>
      <h2>Total distance by vehicles:</h2>
      <p>{totalDistance}</p>
      <hr />
    </div>
  );
};

const Sales = ({ sales }) => {
  const totalRevenue = sales.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    1
  );
  console.log(totalRevenue);
  return (
    <div>
      <h2>Total revenue generated:</h2>
      <p>${totalRevenue}</p>
      <hr />
    </div>
  );
};

export default function App() {
  const books = [
    { id: 1, title: 'Dune', genre: 'Science Fiction' },
    { id: 2, title: 'Neuromancer', genre: 'Science Fiction' },
    { id: 3, title: 'Foundation', genre: 'Sci-fi' },
  ];

  const users = [
    { id: 1, name: 'Alice', role: 'User' },
    { id: 2, name: 'Bob', role: 'Admin' },
    { id: 3, name: 'Charlie', role: 'User' },
    { id: 4, name: 'John', role: 'Admin' },
  ];

  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 1200,
      features: { color: 'green', isWaterProof: false },
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 800,
      features: { color: 'blue', isWaterProof: true },
    },
    {
      id: 3,
      name: 'Headphones',
      price: 150,
      features: { color: 'silver', isWaterProof: false },
    },
  ];

  const cities = [
    { id: 1, name: 'New York', population: 8500000 },
    { id: 2, name: 'Los Angeles', population: 539900 },
    { id: 3, name: 'Chicago', population: 2700000 },
  ];

  const movies = [
    { id: 1, title: 'Inception', releaseYear: 2010 },
    { id: 2, title: 'La La Land', releaseYear: 2016 },
    { id: 3, title: 'Interstellar', releaseYear: 2014 },
    { id: 4, title: 'Dune 2', releaseYear: 2024 },
  ];

  const podcasts = [
    { id: 1, title: 'Tech Talk', host: ['host 1'], featured: true },
    { id: 2, title: 'Business Insights', host: ['host 2'], featured: false },
    {
      id: 3,
      title: 'Science Hour',
      host: ['host 3', 'host 4'],
      featured: true,
    },
  ];

  const moviesData = [
    { id: 1, title: 'The Matrix', duration: 136, releaseYear: 1999 },
    { id: 2, title: 'Inception', duration: 148, releaseYear: 2010 },
    { id: 3, title: 'Avatar', duration: 162, releaseYear: 2009 },
  ];

  const tasks = [
    { id: 1, description: 'Complete project proposal', completed: true },
    { id: 2, description: 'Review client feedback', completed: false },
    { id: 3, description: 'Submit final report', completed: true },
  ];

  const vehicles = [
    { id: 1, name: 'Car', distance: 150 },
    { id: 2, name: 'Bicycle', distance: 10 },
    { id: 3, name: 'Motorcycle', distance: 75 },
  ];

  const sales = [
    { id: 1, product: 'Widget A', price: 25, quantity: 10 },
    { id: 2, product: 'Gadget B', price: 50, quantity: 5 },
    { id: 3, product: 'Tool C', price: 30, quantity: 8 },
  ];

  return (
    <main>
      <Books books={books} />
      <Users users={users} role="Admin" />
      <Products products={products} />
      <Cities cities={cities} />
      <Movies movies={movies} />
      <Podcasts podcasts={podcasts} />
      <MoviesData moviesData={moviesData} />
      <Tasks tasks={tasks} />
      <Vehicles vehicles={vehicles} />
      <Sales sales={sales} />
    </main>
  );
}
