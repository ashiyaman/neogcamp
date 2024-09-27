//Calculate area of rectangle
const rectangleArea = (length = 5, width = 3) => length * width;
console.log(rectangleArea());
console.log(rectangleArea(4));

//Concatenate two strings
const concatenateStrings = (greeting, name = 'neoG') => greeting + name;
console.log(concatenateStrings('Hello', 'World'));
console.log(concatenateStrings('Hello'));

//calculate the volume of a cylinder
const cylinderVolume = (radius = 2, height = 4) =>
  Math.PI * radius ** 2 * height;
console.log(cylinderVolume(3));
console.log(cylinderVolume(3, 5));

//Calculate the total cost of a shopping cart
const shoppingCartTotal = (price = 0, quantity = 1) => price * quantity;
console.log(shoppingCartTotal(10));
console.log(shoppingCartTotal(15, 3)); // Output: 45
console.log(shoppingCartTotal()); // Output: 0

//Arrow function with default parameters that generates a user profile
const generateUserProfile = (
  username = 'Guest',
  age = 25,
  country = 'Unknown'
) => ({ userName: username, age: age, country: country });
console.log(generateUserProfile());
console.log(generateUserProfile('Alice', 30, 'USA'));

//Convert function into an arrow function with default parameter
const sum = (a, b = 5) => a + b;
console.log(sum(2, 4)); // Output: 6
console.log(sum(3)); // Output: 8

//Calculate the power of a number
const calculatePower = (base, exponent = 1) => Math.pow(base, exponent);
console.log(calculatePower(2, 3)); // Output: 8
console.log(calculatePower(5)); // Output: 5

//Calculate the area of a triangle
const triangleArea = (base, height = 4) => 0.5 * base * height;
console.log(triangleArea(5)); // Output: 10
console.log(triangleArea(3, 6)); // Output: 9

//Concatenate two strings
const concatenateTwoStrings = (str1, str2 = '') => str1 + str2;
console.log(concatenateTwoStrings('Good')); // Output: Good
