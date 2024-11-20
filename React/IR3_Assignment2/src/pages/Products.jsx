import { Link } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Products = () => {
  const products = [
    {
      id: '1',
      name: 'Product 1',
      description:
        'This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$99.99',
      availableColors: ['Red', 'Blue', 'Green'],
      isReturnApplicable: true,
      productImageUrl: 'https://www.placehold.co/300x200',
    },
    {
      id: '2',
      name: 'Product 2',
      description:
        'This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$129.99',
      availableColors: ['White', 'Black'],
      isReturnApplicable: true,
      productImageUrl: 'https://www.placehold.co/300x200',
    },
    {
      id: '3',
      name: 'Product 3',
      description:
        'This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$79.99',
      availableColors: ['Yellow'],
      isReturnApplicable: false,
      productImageUrl: 'https://www.placehold.co/300x200',
    },
    {
      id: '4',
      name: 'Product 4',
      description:
        'This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$49.99',
      availableColors: ['Purple', 'Yellow'],
      isReturnApplicable: true,
      productImageUrl: 'https://www.placehold.co/300x200',
    },
  ];

  const affordableProducts = products.filter(
    (product) => parseInt(product.price.slice(1, product.price.length)) < 80
  );
  console.log(affordableProducts);

  return (
    <>
      <Header />
      <main className="container my-3">
        <h2 className="fw-normal my-2">Products</h2>
        <section>
          {products.map((product) => (
            <div className="card my-3">
              <div className="row p-2">
                <div className="col-md-4">
                  <img src={product.productImageUrl} />
                </div>
                <div className="col-md-8 py-3">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <Link to="/products/{product.id}" className="btn btn-primary">
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
        <hr />
        <section>
          <h2 className="fw-normal my-2">Affordable Products</h2>
          <div>
            {affordableProducts.map((product) => (
              <>
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
              </>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
