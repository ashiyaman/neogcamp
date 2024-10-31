const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const exctractletters = words.map((word) => word.slice(0, 3));
console.log('Extract 3 letters:', exctractletters);

const nums = [1, 2, 3, 4, 5];
const cubeArray = nums.map((num) => num * num * num);
console.log('Cube Array: ', cubeArray);

const fruitsArray = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const extractLastLetters = fruitsArray.map((fruit) => fruit.slice(2));
console.log('Fruits array with 2 letters removed: ', extractLastLetters);

const salaries = [5000, 7500, 12000, 3000, 9000];
const salaryWithBonus = salaries.map((salary) => salary + 0.1 * salary);
console.log('Salary with bonus: ', salaryWithBonus);

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
const greetUser = names.map((name) => `Hello, ${name}`);
console.log('User Greeting:', greetUser);

const sentences = [
  'Hello, how are you?',
  'JavaScript is fun!',
  'Arrays are versatile.',
];
const sentenceLength = sentences.map((sentence) => sentence.length);
console.log('Sentence Length: ', sentenceLength);

const temperaturesCelsius = [0, 20, 37, -5, 10];
const convertToFArenheit = temperaturesCelsius.map(
  (temp) => (temp * 9.0) / 5.0 + 32.0
);
console.log('Temperature in Farenheit: ', convertToFArenheit);

const prices = [50, 75, 120, 30, 90];
const discountedPrice = prices.map((price) => price - price * 0.1);
console.log('Discounted price: ', discountedPrice);

const decimalNumbers = [50.2456, 750.5677, 12.56705, 300.5065, 9.23406789];
const roundedNumbers = decimalNumbers.map((num) => num.toFixed(2));
console.log('Rounded Number: ', roundedNumbers);

const namesArray = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
const nameWithLength = namesArray.map((name) => `${name}${name.length}`);
console.log('Name with length of name: ', nameWithLength);
