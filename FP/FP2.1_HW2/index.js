//Filter the even numbers
const nums = [12, 5, 20, 7, 8, 15, 30];
const evenNumbers = nums.filter((num) => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

//Filter the strings that have length greater than 5
const fruits = ['kiwi', 'mango', 'apple', 'orange', 'banana'];
const wordsMoreThan5 = fruits.filter((word) => word.length > 5);
console.log('Words with length more than 5:', wordsMoreThan5);

//Filter the strings that start with letter 'S'
const wordsWithS = ['Sun', 'Moon', 'Star', 'Planet', 'Saturn'];
const isStartsWithS = wordsWithS.filter((word) => word.startsWith('S'));
console.log('Words starts with S:', isStartsWithS);

//Filter the numbers that are not multiples of 3
const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notMultiplesOf3 = threeMultiples.filter((num) => num % 3 !== 0);
console.log('Numbers not multiples of 3:', notMultiplesOf3);

//Filter the numbers divisible by both 7 and 3
const numbs = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const numDivisibleBy7And3 = numbs.filter(
  (num) => num % 3 === 0 && num % 7 === 0
);
console.log('Numbers divided by 7 and 3:', numDivisibleBy7And3);

//Filter the strings that are in lowercase
const words = ['APPLE', 'banana', 'KIWI', 'orange', 'GRAPE'];
const isLowercase = words.filter((word) => word === word.toLowerCase());
console.log('Is lowercase word:', isLowercase);

//Filter the strings that do not contain with the letter 'a'
const wordsY = ['happy', 'sad', 'sunny', 'cloudy', 'rainy'];
const isContainsA = wordsY.filter((word) => !word.includes('a'));
console.log('Words that does not contains a:', isContainsA);

//Filter the numbers that are multiples of either 2 or 3
const numsOnetoTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isMultipleOf2Or3 = numsOnetoTen.filter(
  (num) => num % 2 === 0 || num % 3 === 0
);
console.log('Is multiple of 2 or 3:', isMultipleOf2Or3);

//Filter the strings that includes the letter 'y' or 'a'
const feelingWords = ['happy', 'sad', 'weepy', 'sleepy', 'rainy'];
const isCOntainsYOrA = feelingWords.filter(
  (word) => word.includes('y') || word.includes('a')
);

//Filter the numbers between 20 to 40
const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100];
const isBetween20And40 = newNums.filter((num) => num > 20 && num < 40);
console.log('Numbers between 20 and 40:', isBetween20And40);
