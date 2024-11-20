const products = [
  { id: 1, name: 'Laptop', price: 24000, color: 'red' },
  { id: 2, name: 'Smartphone', price: 17000, color: 'black' },
  { id: 3, name: 'Tablet', price: 4500, color: 'silver' },
  { id: 4, name: 'Headphones', price: 5000, color: 'black' },
  { id: 5, name: 'Speaker', price: 10000, color: 'silver' },
  { id: 6, name: 'TV', price: 15000, color: 'black' },
  { id: 7, name: 'Earphones', price: 3000, color: 'white' },
  { id: 8, name: 'Smartwatch', price: 25000, color: 'black' },
];

const filterInventories = document.querySelector('#filterInventories');
const inventoryList = document.querySelector('#inventoryList');
const totalProducts = document.querySelector('#totalProducts');
const totalCost = document.querySelector('#totalCost');

const renderInventories = (inventories) => {
  inventoryList.innerHTML = ``;
  totalProducts.innerHTML = ``;
  let totalPrice = 0;
  inventories.map((inventory) => {
    const liElement = document.createElement('li');
    liElement.innerHTML = `
      <p><strong>Name: </strong>${inventory.name}</p>
      <p><strong>Price: </strong>$${inventory.price}</p>
      <p><strong>Color: </strong>${inventory.color}</p>
      <hr/>
    `;
    inventoryList.appendChild(liElement);
    totalPrice += inventory.price;
  });
  totalProducts.innerHTML = inventories.length;
  totalCost.innerHTML = `$${totalPrice.toFixed(2)}`;
};

filterInventories.addEventListener('click', () => {
  const filteredProducts = filterInventories.checked
    ? products.filter(
        (product) => product.price >= 15000 && product.color === 'black'
      )
    : products;
  renderInventories(filteredProducts);
});

renderInventories(products);
