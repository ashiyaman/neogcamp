const ProductPage = ({ mobile }) => {
  return (
    <div>
      <h1>Product Page</h1>
      <main>
        <h3>{mobile.title}</h3>
        <img src={mobile.imgURL} />
        <p>
          <strong>Price: </strong>${mobile.price}
        </p>
        <p>
          <strong>Color: </strong>
          {mobile.color}
        </p>
        <p>
          <strong>Description: </strong>
          {mobile.description}
        </p>
        <p>
          <strong>
            {mobile.inStock ? `In Stock` : `Currently Out Of Stock`}
          </strong>
        </p>
      </main>
      <footer>
        <p>&copy; 2024. Apple Inc.</p>
      </footer>
    </div>
  );
};

export default function App() {
  const product = {
    title: 'iPhone 15 Pro',
    imgURL: 'https://www.placehold.co/150x150',
    price: 499.99,
    color: 'Midnight Green',
    description:
      'The latest flagship smartphone from Apple with cutting-edge features and stunning design.',
    inStock: true,
  };
  return (
    <>
      <ProductPage mobile={product} />
    </>
  );
}
