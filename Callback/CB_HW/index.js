console.log('---- Ex 1 ----');
const getUserName = (firstName, callback) => {
  const lastName = 'Doe';
  const message = `Hello, ${firstName} ${lastName}!`;
  callback(message);
};
const greetUser = (message) => {
  console.log(message);
};
getUserName('John', greetUser);
console.log('\n');

console.log('---- Ex 2 ----');
const calculateAge = (birthYear, callback) => {
  const calculatedAge = new Date().getFullYear() - birthYear;
  callback(calculatedAge);
};
const displayAge = (age) => {
  console.log(`You are ${age} years old.`);
};
calculateAge(1990, displayAge);
console.log('\n');

console.log('---- Ex 3 ----');
const generateUsername = (firstName, callback) => {
  const userName = `${firstName}_user`;
  callback(userName);
};
const displayUsername = (userName) => {
  console.log(`Your username is: ${userName}.`);
};
generateUsername('Ashiya', displayUsername);
console.log('\n');

console.log('---- Ex 4 ----');
const checkTemperature = (celcius, callback) => {
  const convertedTemp = (celcius * 9.0) / 5.0 + 32.0;
  callback(convertedTemp);
};
const displayTemperatureMessage = (convertedTemp) => {
  const temperature =
    convertedTemp < 50 ? 'Cold' : convertedTemp > 86 ? 'Hot' : 'Moderate';
  console.log(`The Temperature is ${temperature}.`);
};
checkTemperature(25, displayTemperatureMessage);
console.log('\n');

console.log('---- Ex 5 ----');
const processArray = (numbers, callback) => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(callback(numbers[i]));
  }
  console.log(result);
};
// Function to square a number
const squareNumber = (num) => num * num;
// Array of numbers
const numbersArray = [1, 2, 3, 4, 5];
// Process the array and square each number
processArray(numbersArray, squareNumber);
console.log('\n');

console.log('---- Ex 6 ----');
const processArraySum = (numArray, callback) => {
  const doubledArray = [];
  for (let i = 0; i < numArray.length; i++) {
    doubledArray.push(callback(numArray[i]));
  }
  console.log(doubledArray);
};
const doubleNumber = (num) => num * 2;
// Array of numbers
const numArray = [2, 4, 6, 8, 10];
// Process the array and double each number
processArraySum(numArray, doubleNumber);
console.log('\n');
