//Arrow function that takes an object containing temperature details and prints them.
const printTemperature = ({ location, temperature }) =>
    `Location: ${location}, Temperature: ${temperature} degree celcius`;
  console.log(printTemperature({ location: 'New York', temperature: 15 }));
  console.log(printTemperature({ location: 'London', temperature: 10 }));
  
  //Arrow function that takes an object containing fruit details and prints them.
  const printFruit = ({ fruitName, fruitColor: color, inStock: available }) =>
    `Fruit Name: ${fruitName}, Fruit Color: ${color}, Available: ${available}`;
  console.log(
    printFruit({ fruitName: 'Apple', fruitColor: 'Red', inStock: true })
  );
  console.log(
    printFruit({ fruitName: 'Grapes', fruitColor: 'Green', inStock: false })
  );
  
  //Arrow function that takes an array containing a student's name and their scores, and prints them.
  const printStudentScores = ([name, ...rest]) =>
    `Students: ${name}, Scores: ${rest}`;
  console.log(printStudentScores(['Alice', 90, 85, 95]));
  console.log(printStudentScores(['Bob', 80, 75, 85]));
  
  //Arrow function that takes an object containing details of a product and prints them by renaming the keys.
  const printProductDetails = ({ name: productName, price: productPrice }) =>
    `Product: ${productName}, price: $${productPrice}`;
  console.log(printProductDetails({ name: 'Laptop', price: 899 }));
  console.log(printProductDetails({ name: 'Phone', price: 599 }));
  
  //Arrow function that takes an object containing a person's details with default parameters and prints them. Rename name and age.
  const printPersonDetails = ({
    name: personName = 'Anonymous',
    age: personAge = 'Unknown',
  }) => `Name: ${personName}, Age: ${personAge}`;
  console.log(printPersonDetails({ name: 'John', age: 30 }));
  console.log(printPersonDetails({}));
  
  //Arrow function that takes an array containing a city and its population details and prints them. Rename city,  population and country.
  const printCityPopulation = ([
    cityName,
    { population: citySize, country: countryName },
  ]) => `City: ${cityName}, Population: ${citySize}, country: ${countryName}`;
  console.log(
    printCityPopulation(['New York', { population: 8623000, country: 'USA' }])
  );
  console.log(
    printCityPopulation(['Tokyo', { population: 37833000, country: 'Japan' }])
  );
  
  //Arrow function that takes an array containing a car and its details and prints them. Rename car name and model.
  const printCarDetails = ([carName, { model: carModel, price }]) =>
    `Name: ${carName}, Model: ${carModel}, Price: ${price}`;
  console.log(
    printCarDetails(['All-Terrain SUV', { model: 'SUV', price: 4500000 }])
  );
  console.log(
    printCarDetails(['GreenDrive Electric', { model: 'Electric', price: 500000 }])
  );
  