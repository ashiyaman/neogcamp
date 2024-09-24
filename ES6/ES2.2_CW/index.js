// run `node index.js` in the terminal

//arrow functions that generates random numbers between 1 to 10

const getRandomNumber = () => Math.floor(Math.random(1, 10) * 10);
console.log(getRandomNumber());

//function to return current date

const getCurrentDate = () => new Date().toLocaleDateString();
console.log(getCurrentDate());

//function to return a greeting

const getGreeting = () => 'Hello, World!';
console.log(getGreeting());

//find square

const getSquare = (num) => num ** 2;
console.log(getSquare(8));

//check if number is positive

const isPositive = (num) => num > 0;
console.log(isPositive(22));
console.log(isPositive(-7));

//check if number is even

const isEven = (num) => num % 2 === 0;
console.log(isEven(6));
console.log(isEven(99));
