// run `node index.js` in the terminal

//Normal Function

/*function add(a, b) {
  return a + b;
}
console.log(add(5, 2));*/

//ES6 - Arrow functions

//add numbers
const add = (a, b) => a + b;
console.log(add(2, 7));

//multiply numbers
const multiply = (a, b) => a * b;
console.log(multiply(2, 7));

//concatenate strings
const concatenateStrings = (str1, str2) => str1 + str2;
console.log(concatenateStrings('Hello ', 'World!'));
