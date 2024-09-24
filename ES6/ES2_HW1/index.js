//calculate area of rectangle
const getRectangleArea = (length, width) => length * width;
console.log('Area of rectangle:', getRectangleArea(5, 8));

//check if number is divisible
const isNumberDivisible = (num1, num2) => num1 % num2 === 0;
console.log('Is 88 divisible by 2?', isNumberDivisible(88, 2));
console.log('Is 100 divisible by 3?', isNumberDivisible(100, 3));

//find the difference
const difference = (num1, num2) => num1 - num2;
console.log('The difference is:', difference(15, 5));

//concatenate strings
const concatenateStrings = (str1, str2, str3) => `${str1}${str2} ${str3}`;
console.log('Concatenated words:', concatenateStrings('I', 'am', 'happy.'));

//Traditional function - Is number bigger?
function isBigger(a, b) {
  if (a > b) {
    return true;
  }
  return false;
}
console.log('Is 2 bigger than 3?', isBigger(2, 3));

//Arrow function - Product of two numbers
const printProduct = (a, b) => a * b;
console.log('Product of two numbers: ', printProduct(2, 6));

//Arrow function - Get Greeting
const getGreeting = (greeting, name) => greeting + name;
console.log(getGreeting('Hello ', 'John'));
