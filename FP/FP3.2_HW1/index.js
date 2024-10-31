//Transform the given array of objects into an object
const data = [
    { key: 'item', value: 'Pencil' },
    { key: 'price', value: 250 },
    { key: 'inStock', value: true },
  ];
  const transformedArray = data.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {});
  console.log('Transformed Array:', transformedArray);
  
  //Convert the given array of objects into an array of colors
  const students = [
    { item: 'Pen', color: 'blue' },
    { item: 'Pen', color: 'black' },
    { item: 'Pen', color: 'red' },
  ];
  const colors = students.reduce((acc, curr) => acc.concat(curr.color), []);
  console.log('Colors:', colors);
  
  //Convert the given array of objects into an array of cities
  const countries = [
    { item: 'Car', manufacturingCity: 'New York' },
    { item: 'Car', manufacturingCity: 'Los Angeles' },
    { item: 'Car', manufacturingCity: 'Chicago' },
  ];
  const cities = countries.reduce(
    (acc, curr) => acc.concat(curr.manufacturingCity),
    []
  );
  console.log('Cities:', cities);
  
  //Convert the given array of objects into an array of fruits
  const groceryItems = [
    { item: 'Fruit', name: 'Apple' },
    { item: 'Fruit', name: 'Banana' },
    { item: 'Fruit', name: 'Orange' },
  ];
  const fruits = groceryItems.reduce((acc, curr) => acc.concat(curr.name), []);
  console.log('Fruits:', fruits);
  
  //Transform the given array of objects into an object
  const details = [
    { key: 'category', value: 'Electronics' },
    { key: 'rating', value: 4.5 },
    { key: 'available', value: true },
  ];
  const category = details.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {});
  console.log('Category:', category);
  