const products = [
    { id: 1, name: 'Laptop', price: 79990 },
    { id: 2, name: 'Headphone', price: 5770 },
    { id: 3, name: 'Smartphone', price: 19000 },
    { id: 4, name: 'Tablet', price: 24000 },
  ];
  
  const productListing = document.querySelector('#productListing');
  const productListingDiv = products.map(
    (product) => `
    <div>
      ID: ${product.id}<br>
      Name: ${product.name}<br>
      Price: $${product.price}
      <hr>
    </div>
  `
  );
  
  productListing.innerHTML = productListingDiv.join('');
  