const ProductList = ({ products }) => {
  const productListing = products.map((product) => (
    <div key={product.id}>
      <h3>Name: {product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  ));

  return (
    <>
      <h1>Products</h1>
      {productListing}
      <hr />
    </>
  );
};

const Restaurants = ({ restaurants }) => {
  const restaurantListing = restaurants.map((restaurant) => (
    <div key={restaurant.id}>
      <h3>Name: {restaurant.name}</h3>
      <p>Cuisine: {restaurant.cuisine}</p>
    </div>
  ));

  return (
    <>
      <h2>Restaurants</h2>
      {restaurantListing}
      <hr />
    </>
  );
};

const Videos = ({ videos }) => {
  const videosListing = videos.map((video) => (
    <div key={video.id}>
      <h3>Title: {video.title}</h3>
      <p>Views: {video.views}</p>
    </div>
  ));

  return (
    <>
      <h2>Videos</h2>
      {videosListing}
    </>
  );
};

export default function App() {
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
  ];

  const restaurants = [
    { id: 1, name: 'Restaurant 1', cuisine: 'Italian' },
    { id: 2, name: 'Restaurant 2', cuisine: 'American' },
    { id: 3, name: 'Restaurant 3', cuisine: 'Mexican' },
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
