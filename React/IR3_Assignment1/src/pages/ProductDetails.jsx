import { useParams } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const ProductDetails = () => {
  const productId = useParams();

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

  const productDetail = products.find(
    (product) => product.id == productId.productId
  );

  return (
    <>
      <Header />
      <main className="container my-4">
        <h2 className="fw-normal">{productDetail.name}</h2>
        <img
          src={productDetail.productImageUrl}
          alt={productDetail.name}
          className="my-3"
        />
        <p>Price: {productDetail.price}</p>
        <p>Description: {productDetail.description}</p>
        <p>Available Colors: {productDetail.availableColors.join(', ')}</p>
        <p>
          Return Policy:{' '}
          {productDetail.returnPolicy
            ? `Return applicable within 7 days.`
            : `No Return Policy.`}
        </p>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
