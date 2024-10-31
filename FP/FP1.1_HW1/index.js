const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const wordLength = words.map((word) => word.length);
console.log('Length of words: ', wordLength);

const numbers = [1, 2, 3, 4, 5];
const squaredArray = numbers.map((num) => num * num);
console.log('Squared Array: ', squaredArray);

const fruits = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const capitalizeArray = fruits.map((word) => word.toUpperCase());
console.log('Capitalized Array: ', capitalizeArray);

const nums = [4, 9, 16, 25, 36];
const squareRootNumbers = nums.map((num) => Math.sqrt(num));
console.log('Square root Numbers: ', squareRootNumbers);

const prefixFruits = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const addPrefix = prefixFruits.map((fruit) => `fruit-${fruit}`);
console.log('Prefixed fruits: ', addPrefix);

const numbersArray = [1, 2, 3, 4, 5];
const add10ToNumbers = numbersArray.map((num) => num + 10);
console.log('10 added to number:', add10ToNumbers);

const numsArray = [1, 2, 3, 4, 5];
const addToSquareArray = numsArray.map((num) => num * num + num);
console.log('Add number to square: ', addToSquareArray);

const numsArr = [-5, 3, -8, 12, -1, 6];
const absoluteArray = numsArr.map((num) => Math.abs(num));
console.log('Absolute Number Array: ', absoluteArray);

const phrases = ['Hello', 'How are you', 'Goodbye'];
const appendToStr = phrases.map((str) => `${str}!`);
console.log('Append ! to String: ', appendToStr);

const wordsToCapitalize = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const capitalizeThirdLetter = wordsToCapitalize.map(
  (word) => `${word.slice(0, 2)}${word.charAt(2).toUpperCase()}${word.slice(3)}`
);
console.log('Capitalize third letter: ', capitalizeThirdLetter);
