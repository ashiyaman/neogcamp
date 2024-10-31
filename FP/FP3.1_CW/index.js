//Reduce method

//Sum of numbers in array
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += 1;
}
console.log(sum);

const sumNumbers = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
); // accumulator = prev value, its like sum: current value = i: 0 is like sum = 0
console.log(sumNumbers);

//Concatenate string
const stringArray = ['Hi ', 'Ashiya', '!'];
const combinedStr = stringArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  ''
);
console.log(combinedStr);

const numsArray = [10, 5, 28, 12, 19];
const maxNumber = numsArray.reduce(
  (accumulator, currentValue) =>
    accumulator > currentValue ? accumulator : currentValue,
  numsArray[0]
);
console.log('Highest number:', maxNumber);

//Occurence of each word in array
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'grapes'];
const wordCount = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log('Word Count:', wordCount);
