//Default parameters

//Arrow function to add two numbers
const addNumbers = (a, b = 6) => a + b;
console.log('Sum:', addNumbers(2));

//Arrow function to multiply two numbers
const multiplyNumbers = (a, b = 4) => a * b;
console.log('Product:', multiplyNumbers(2, 2));

//Arrow function to concatenate strings
const concatenatedStrings = (name = 'neoGrammer', greeting = 'Hello ') =>
  greeting + name;
console.log(concatenatedStrings('Ashiya'));

//Arrow function to add three numbers
const addThreenumbers = (a, b, c = 7) => a + b + c;
console.log('Sum of three numbers:', 1, 2);
