const WelcomeBanner = (props) => {
  return <h1>Welcome to {props.appName} App!</h1>;
};

const RecipeDetails = (props) => {
  return (
    <div>
      <h2>Recipe Details</h2>
      <p>Title: {props.recipeData.title}</p>
      <p>Author: {props.recipeData.author}</p>
      <p>Rating: {props.recipeData.rating}</p>
    </div>
  );
};

const MovieInformation = (props) => {
  return (
    <div>
      <h2>Movie Information</h2>
      <p>Title: {props.movieData.title}</p>
      <p>Director: {props.movieData.director}</p>
      <p>Release Date: {props.movieData.releaseDate}</p>
    </div>
  );
};

const ProductFeatures = (props) => {
  return (
    <div>
      <h2>Product Features</h2>
      <p>Name: {props.productData.name}</p>
      <p>Color: {props.productData.color}</p>
      <p>Size: {props.productData.size}</p>
    </div>
  );
};

const UserProfileCard = (props) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
    </div>
  );
};

export default function App() {
  const recipeData = {
    title: 'Chocolate Cake',
    author: 'Baker Betty',
    rating: 4.7,
  };

  const movieData = {
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    releaseDate: 'March 24, 1972',
  };

  const productData = {
    name: 'Smartwatch',
    color: 'Black',
    size: 'Medium',
  };

  return (
    <div>
      <WelcomeBanner appName="My Recipe" />
      <RecipeDetails recipeData={recipeData} />
      <MovieInformation movieData={movieData} />
      <ProductFeatures productData={productData} />
      <UserProfileCard name="Alice" email="alice@exapmle.com" role="Admin" />
    </div>
  );
}
