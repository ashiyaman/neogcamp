//Arrow function that takes an array of numbers and returns the sum and the difference of the first two elements in the array.
const sumAndDifference = (arr) => {
    const [a, b] = arr;
    return { Sum: a + b, Diffrence: a - b };
  };
  console.log(sumAndDifference([5, 3]));
  console.log(sumAndDifference([10, 7]));
  
  //Arrow function that extracts the first and last characters from a string.
  const extractFirstAndLast = ([a, ...rest]) => ({
    'First character': a,
    'Last character': rest[rest.length - 1],
  });
  console.log(extractFirstAndLast('hello'));
  console.log(extractFirstAndLast('world'));
  
  //Arrow function that extracts the length and width from a rectangle object and calculates its area.
  const calculateRectangleArea = ({ length, width }) => length * width;
  console.log(calculateRectangleArea({ length: 5, width: 3 }));
  console.log(calculateRectangleArea({ length: 8, width: 4 }));
  
  //Arrow function that takes an array of colors and extracts the first two colors using destructuring
  const getFirstTwoColors = (arr) => {
    const [a, b, fruits] = arr;
    console.log(`The first two are: ${a} and ${b}`);
  };
  getFirstTwoColors(['red', 'blue', 'green', 'yellow']);
  getFirstTwoColors(['orange', 'purple', 'pink']);
  
  //Arrow function that takes an object with a nested object and extracts information from it.
  const extractNestedInfo = (obj) => {
    const {
      data: { name, age, country },
    } = obj;
    console.log(`${name} is ${age} years old and lives in ${country}`);
  };
  extractNestedInfo({ data: { name: 'John', age: 35, country: 'USA' } });
  extractNestedInfo({ data: { name: 'Emma', age: 28, country: 'Canada' } });
  
  //Arrow function that takes an array of numbers and returns the product of first two numbers and then subtract the third number from it
  const productAndDifference = (arr) => {
    const [a, b, c, num] = arr;
    return a * b - c;
  };
  console.log('Product and difference:', productAndDifference([5, 3, 5, 6]));
  console.log('Product and difference:', productAndDifference([10, 7, 35, 30]));
  
  //Arrow function that takes an object and extracts information from it.
  const extractData = ({
    product: { itemName, description, manufacturingCountry },
  }) => ({
    'Item Name': itemName,
    Description: description,
    'Manufacturing Country': manufacturingCountry,
  });
  console.log(
    extractData({
      id: 1,
      product: {
        itemName: 'Pencil',
        description: 'Extra Dark Pencil',
        manufacturingCountry: 'USA',
      },
    })
  );
  
  console.log(
    extractData({
      id: 2,
      product: {
        itemName: 'Sharpener',
        description: 'Faber Castell Premium',
        manufacturingCountry: 'Germany',
      },
    })
  );
  