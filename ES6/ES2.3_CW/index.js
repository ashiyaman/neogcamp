//function that takes a string and returns object
const createStringObject = (str) => ({
Text: str,
});
console.log(createStringObject('Hello'));

//arrow function that takes two numbers and returns sum and product of the numbers
const calculateSumAndProduct = (num1, num2) => ({
Sum: num1 + num2,
Product: num1 * num2,
});
console.log(calculateSumAndProduct(3, 7));

//arrow function that takes name and age of a person and returns an object with same properties
const createPersonObject = (name, age) => ({ Name: name, Age: age });
console.log(createPersonObject('Ashiya', 32));
  