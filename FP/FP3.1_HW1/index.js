//Find the longest word using `.reduce()`
const words = ['apple', 'banana', 'kiwi', 'strawberry', 'grape'];
const longestWord = words.reduce(
  (acc, curr) => (acc.length > curr.length ? acc : curr),
  words[0]
);
console.log('Longest Word:', longestWord);

//Find the minimum using `.reduce()`
const numbers = [10, 5, 8, 20, 15];
const minNumber = numbers.reduce(
  (acc, curr) => (acc < curr ? acc : curr),
  numbers[0]
);
console.log('Minimum number:', minNumber);

//Find the total length of all strings using `.reduce()`
const wordsLength = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const strLength = wordsLength.reduce((acc, curr) => acc + curr.length, 0);
console.log('Length of string:', strLength);

//Count the number of even numbers using `.reduce()`
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numEvenNums = nums.reduce(
  (acc, curr) => (curr % 2 === 0 ? acc + 1 : acc),
  0
);
console.log('Even Numbers Count:', numEvenNums);

//Capitalize the first letter of each word and concatenate them into a single string using `.reduce()`.
const wordsCaps = ['hello', 'world', 'how', 'are', 'you'];
const concatenateStr = wordsCaps.reduce(
  (acc, curr) =>
    `${acc} ${curr.charAt(0).toUpperCase()}${curr.slice(1, curr.length)}`,
  wordsCaps[0]
);
console.log('Concatenated Str:', concatenateStr);

//Calculate the average of the numbers using .reduce()
const numsAvg = [10, 15, 20, 25, 30];
const getAvg = numsAvg.reduce((acc, curr) => acc + curr, 0) / numsAvg.length;
console.log('Average of numbers:', getAvg);

//Find the sum of square of each number using `.reduce()`.
const numbersSq = [1, 2, 3, 4, 5];
const sumOfSquares = numbersSq.reduce((acc, curr) => acc + curr ** 2, 0);
console.log('Sum Of Squares:', sumOfSquares);

//Create an object with the occurrences of words using `.reduce()`
const stationeryWords = [
  'pen',
  'notebook',
  'eraser',
  'notebook',
  'pencil',
  'notebook',
  'pencil',
];
const wordOccurence = stationeryWords.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log('Word occurence:', wordOccurence);

//Create an object with the occurrences of words using `.reduce()`. The keys should be the first letter of each word.
const wordsLetter = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const occurence = wordsLetter.reduce((acc, curr) => {
  const keyChar = curr.charAt(0);
  acc[keyChar] = acc[keyChar] || 0 + 1;
  return acc;
}, {});
console.log('Occurence:', occurence);

//Find the product of positive numbers using `.reduce()`
const numPositive = [-2, 3, 4, -5, 6];
const product = numPositive.reduce(
  (acc, curr) => (curr > 0 ? acc * curr : acc),
  1
);
console.log('product:', product);
