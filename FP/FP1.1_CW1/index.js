//map() method

const numArray = [1, 2, 3, 4, 5];

//Multiplying array by 2
const numbersMultiplyBytwo = numArray.map((num) => num * 2);
console.log('Array multiplied by 2: ', numbersMultiplyBytwo);

//Doubling the array
const doubledArray = numArray.map((num) => num * num);
console.log('Doubled array: ', doubledArray);

//Capitalize first letter of word
const wordsArray = ['apple', 'grapes', 'mango', 'pineapple', 'strawberry'];
const capitalizeWords = wordsArray.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);
console.log('Capitalized array: ', capitalizeWords);

//Change numbers array to string
const stringArray = numArray.map((num) => num.toString());
console.log('String Array: ', stringArray);
