const ProductList = ({ products }) => {
  const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div>
      <h2>Total Price of Products</h2>
      <p>${totalPrice}</p>
      <hr />
    </div>
  );
};

const Restaurants = ({ restaurants }) => {
  const totalRatings = restaurants.reduce((acc, curr) => acc + curr.ratings, 0);

  const avgratings = totalRatings / restaurants.length;

  return (
    <div>
      <h2>Total Ratings</h2>
      <p>{totalRatings}</p>

      <h2>Average Ratings</h2>
      <p>{avgratings.toFixed(2)}</p>
      <hr />
    </div>
  );
};

const Videos = ({ videos }) => {
  const totalViews = videos.reduce((acc, curr) => acc + curr.views, 0);

  return (
    <div>
      <h2>Total Views of videos</h2>
      <p>{totalViews}</p>
    </div>
  );
};

export default function App() {
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
  ];

  const restaurants = [
    { id: 1, name: 'Restaurant 1', cuisine: 'Italian', ratings: 5 },
    { id: 2, name: 'Restaurant 2', cuisine: 'American', ratings: 4.7 },
    { id: 3, name: 'Restaurant 3', cuisine: 'Mexican', ratings: 4.8 },
  ];

  const videos = [
    { id: 1, title: 'video 1', views: 1000 },
    { id: 2, title: 'video 2', views: 2000 },
    { id: 3, title: 'video 3', views: 3000 },
  ];

  return (
    <main>
      <ProductList products={products} />
      <Restaurants restaurants={restaurants} />
      <Videos videos={videos} />
    </main>
  );
}
