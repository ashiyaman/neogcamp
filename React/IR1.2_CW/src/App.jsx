import './App.css';

const StudentDetails = () => {
  const name = 'Ashiya';
  const age = 21;
  const grade = 'A';

  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Grade: {grade}</p>
    </div>
  );
};

const ProductDetails = () => {
  const product = {
    name: 'Laptop',
    brand: 'Dell',
    price: 20000,
  };
  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Brand: {product.brand}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

const UserProfile = () => {
  const user = {
    name: 'John Mason',
    age: 17,
    address: {
      street: '123 Main',
      city: 'Bengaluru',
      state: 'Karnataka',
      zipcode: 560055,
    },
  };
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>
        Address: {user.address.street}, {user.address.city},{' '}
        {user.address.state} {user.address.zipcode}
      </p>
    </div>
  );
};

const MovieDetails = () => {
  const movie = {
    title: 'Title 1',
    releaseYear: 2010,
    director: {
      name: 'Christopher Nolan',
      nationality: 'British',
    },
    genre: ['Sci-Fi', 'Thriller', 'Action'],
  };
  return (
    <div>
      <p>Title: {movie.title}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>
        Director: {movie.director.name}({movie.director.nationality})
      </p>
      <p>Genre: {movie.genre.join(', ')}</p>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h2>Student Details:</h2>
      <StudentDetails />
      <h2>Product Details:</h2>
      <ProductDetails />
      <h2>User Details:</h2>
      <UserProfile />
      <h2>Movie Details:</h2>
      <MovieDetails />
    </div>
  );
}
