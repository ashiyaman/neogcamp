//check if number is odd
const isOdd = (num) => num % 2 !== 0;
console.log('Is number 2 Odd?', isOdd(2));
console.log('Is number 23 Odd?', isOdd(23));

//calculate length of string
const calculateStringLength = (str) => str.length;
console.log('Length of string:', calculateStringLength('Hello World!'));

//capitalise word
const capitaliseWord = (word) => word.toUpperCase();
console.log('Capitalised word:', capitaliseWord('hello'));

//Get Current Date
const getCurrentDate = () => new Date().toLocaleDateString();
console.log('Current Date:', getCurrentDate());

//Get Current Time
const getCurrentTime = () => new Date().toLocaleTimeString();
console.log('Current Time:', getCurrentTime());

//convert Farenheit to celcius
const farenheitToCelcius = (temp) => (temp - 32) * (5 / 9);
console.log('Farenheit to Celcius:', farenheitToCelcius(64));

//Check if string is empty
const isStringEmpty = (str) => str.length <= 0;
console.log('Is string empty?', isStringEmpty('Hello'));
console.log('Is string empty?', isStringEmpty(' '));
console.log('Is string empty?', isStringEmpty(''));

//Get random number
const getRandomNumber = () => Math.floor(Math.random(1, 30) * 10);
console.log('Random number:', getRandomNumber());

//Get square root
const getSquareRoot = () => Math.floor(Math.random(1, 100) * 10) ** 2;
console.log('Square root:', getSquareRoot());

//Change to lower case
const changeToLower = (str) => str.toLowerCase();
console.log('Lowercase word:', changeToLower('HELLO world!'));
