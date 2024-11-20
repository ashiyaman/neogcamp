const Products = ({ products, productId }) => {
  const productDetail = products.find((product) => product.id === productId);
  return (
    <div>
      <h2>Product Data</h2>
      <p>Id: {productDetail.id}</p>
      <p>Name: {productDetail.name}</p>
      <p>Price: ${productDetail.price}</p>
      <hr />
    </div>
  );
};

const Restaurants = ({ restaurants, name }) => {
  const restaurantDetail = restaurants.find(
    (restaurant) => restaurant.name === name
  );
  return (
    <div>
      <h2>Restaurant Data</h2>
      <p>Name: {restaurantDetail.name}</p>
      <p>Cuisine: {restaurantDetail.cuisine}</p>
      <hr />
    </div>
  );
};

const Videos = ({ videos, title }) => {
  const videoDetail = videos.find((video) => video.title === title);
  return (
    <div>
      <h2>Videos Data</h2>
      <p>Title: {videoDetail.title}</p>
      <p>Views: {videoDetail.views}</p>
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
      <Products products={products} productId={2} />
      <Restaurants restaurants={restaurants} name="Restaurant 3" />
      <Videos videos={videos} title="video 1" />
    </main>
  );
}
