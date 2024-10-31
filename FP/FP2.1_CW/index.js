//Filter method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log('Original numbers:', numbers);
console.log('Even numbers:', evenNumbers);

const words = ['apple', 'mango', 'orange', 'strawberry'];
const longWords = words.filter((word) => word.length > 5);
console.log('Long words:', longWords);

const numbersArray = [2, -3, 12, -4, 5, 0, -8, 1, 56];
const posiviveNumbers = numbersArray.filter((num) => num > 0);
console.log('Positive numbers:', posiviveNumbers);

const fruits = ['banana', 'kiwi', 'orange', 'grapes', 'lemon'];
const fruitContainsA = fruits.filter((fruit) => fruit.includes('a'));
console.log('Fruits containing letter A:', fruitContainsA);
