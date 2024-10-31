const items = [
    { id: 1, item: 'Item 1', price: 10 },
    { id: 2, item: 'Item 2', price: 20 },
    { id: 3, item: 'Item 3', price: 15 },
    { id: 4, item: 'Item 4', price: 25 },
  ];
  
  const itemListContainer = document.querySelector('#itemListContainer');
  const totalCostContainer = document.querySelector('#totalCostContainer');
  const avgCostContainer = document.querySelector('#avgCostContainer');
  
  const itemList = items.reduce(
    (acc, curr) => {
      const liElement = document.createElement('li');
      liElement.textContent = `${curr.item} - $${curr.price}`;
      itemListContainer.appendChild(liElement);
  
      acc.totalCost += curr.price;
      return acc;
    },
    { totalCost: 0 }
  );
  
  totalCostContainer.textContent = `$${itemList.totalCost}`;
  avgCostContainer.textContent = `$${itemList.totalCost / items.length}`;
  
  itemList();
  