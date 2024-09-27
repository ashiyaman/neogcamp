//Arrow function that creates an object using shorthand property values
const createPerson = (name, age) => ({ name, age });
console.log(createPerson('Alice', 25));
console.log(createPerson('Bob', 30));

//Arrow function that creates an object with default values using shorthand property values.
const createFruit = (name = 'Apple', color = 'Red') => ({ name, color });
console.log(createFruit());
console.log(createFruit('Banana', 'Yellow'));

//arrow function that creates an object using shorthand property values.
const createBookObj = (title, author, genre) => ({ title, author, genre });
console.log(
  createBookObj('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic')
);
console.log(createBookObj('The Beatles Anthology', 'The Beatles', 'Music'));

//Arrow function that creates an object with default values using shorthand property values.
const createBook = (
  bookName = "The Hitchhiker's Guide to the Galaxy",
  author = 'Douglas Adams'
) => ({ bookName, author });
console.log(createBook());
console.log(createBook('A Suitable Boy', 'Vikram Seth'));

//Create an object using shorthand property values and print it
let aaloo = 1;
let bhaaloo = 2;
const obj1 = (aaloo, bhaaloo) => ({ aaloo, bhaaloo });
console.log(obj1(aaloo, bhaaloo));

//Calculate area of a rectangle
const calculateArea = (length, width) => ({
  length,
  width,
  area: length * width,
});
console.log(calculateArea(5, 8));

//Arrow function to print Obj Of Arrays
const printObjOfArrays = (arr1, arr2) => ({ arr1, arr2 });
console.log(printObjOfArrays([1, 2, 3], ['a', 'b']));

//Arrow function create Triangle
const createTriangle = (side1, side2, side3) => ({
  side1,
  side2,
  side3,
  perimeter: (side1 * side2 * side3) / 3,
});
console.log(createTriangle(3, 4, 5));

//Arrow function `createPoint` that takes x and y coordinates and returns an object representing a 2D point
const createPoint = (x, y) => ({ x, y });
console.log(createPoint(3, 7));
// Output: { x: 3, y: 7 }

//Arrow function to create Email
const createEmail = (username, domain) => ({
  username,
  domain,
  fullAddress: username + domain,
});
console.log(createEmail('john.doe', 'example.com'));
// Output: { username: 'john.doe', domain: 'example.com', fullAddress: 'john.doe@example.com' }
