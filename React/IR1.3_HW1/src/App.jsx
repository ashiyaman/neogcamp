const WelcomeMessage = (props) => {
  return <h1>Welcome, {props.name}!</h1>;
};

const BookDetails = (props) => {
  return (
    <div>
      <h2>Book Details:</h2>
      <p>Title: {props.bookData.title}</p>
      <p>Author: {props.bookData.author}</p>
      <p>Genre: {props.bookData.genre}</p>
    </div>
  );
};

const ArticleInformation = (props) => {
  return (
    <div>
      <h2>Article Information</h2>
      <p>Title: {props.articleData.title}</p>
      <p>Author: {props.articleData.author}</p>
      <p>Published Date: {props.articleData.publishedDate}</p>
    </div>
  );
};

const ProductDetails = (props) => {
  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {props.productData.name}</p>
      <p>Brand: {props.productData.brand}</p>
      <p>Price: ${props.productData.price}</p>
    </div>
  );
};

const EventDetails = (props) => {
  return (
    <div>
      <h2>Event Details</h2>
      <p>Title: {props.eventData.title}</p>
      <p>Location: {props.eventData.location}</p>
      <p>Date: {props.eventData.date}</p>
    </div>
  );
};

const UserProfile = (props) => {
  return (
    <div>
      <h2>User Profile</h2>
      <img src={props.url} alt="placeholder" />
    </div>
  );
};

export default function App() {
  const bookData = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic',
  };

  const articleData = {
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    publishedDate: 'March 1, 2024',
  };

  const productData = {
    name: 'Smartphone',
    brand: 'Samsung',
    price: 799.99,
  };

  const eventData = {
    title: 'Tech Conference 2024',
    location: 'San Francisco',
    date: 'April 15, 2024',
  };

  return (
    <div>
      <WelcomeMessage name="Emily" />
      <BookDetails bookData={bookData} />
      <ArticleInformation articleData={articleData} />
      <ProductDetails productData={productData} />
      <EventDetails eventData={eventData} />
      <UserProfile url="https://www.placehold.co/150x150" />
    </div>
  );
}
