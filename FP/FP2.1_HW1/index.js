//Filter the numbers more than 10
const nums = [12, 5, 20, 8, 15, 30];
const numbersMoreThan10 = nums.filter((num) => num > 10);
console.log('Numbers more than 10:', numbersMoreThan10);

//filter the strings that contain the letter 'o'
const words = ['hello', 'world', 'apple', 'orange', 'banana'];
const filterWordsWithO = words.filter((word) => word.includes('o'));
console.log('Words that containes O:', filterWordsWithO);

//Filter the prime numbers
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeNumbers = numbers.filter((num) => isPrime(num));
console.log('Prime Numbers:', primeNumbers);

//Filter the numbers that are not multiples of 3
const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const not3Multiples = threeMultiples.filter((num) => num % 3 !== 0);
console.log('Numbers not multiples of 3:', not3Multiples);

//Filter the numbers not divisible by both 2 and 3
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notDivisibleBy2Or3 = numbs.filter(
  (num) => num % 2 !== 0 && num % 3 !== 0
);
console.log('Numbers not divisible by 2 or 3:', notDivisibleBy2Or3);

//Filter the strings that are in uppercase
const isWordsUpper = ['APPLE', 'banana', 'KIWI', 'ORANGE', 'GRAPE'];
const uppercaseWords = isWordsUpper.filter(
  (word) => word === word.toUpperCase()
);
console.log('Uppercase words:', uppercaseWords);

//Filter the strings that do not end with the letter 'y'
const wordsY = ['happy', 'sad', 'sunny', 'cloudy', 'rainy'];
const wordsEndWithY = wordsY.filter(
  (word) => word.charAt(word.length - 1) === 'y'
);
console.log('Words end with Y:', wordsEndWithY);

//Filter the numbers that are multiples of both 2 and 3
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isMultipleOf2And3 = numArray.filter(
  (num) => num % 2 === 0 && num % 3 === 0
);
console.log('Number multiples of 2 and 3:', isMultipleOf2And3);

//Filter the strings that includes the letter 'y' and 'u'
const feelingWords = ['happy', 'sad', 'sunny', 'cloudy', 'rainy'];
const wordWithYandU = feelingWords.filter(
  (word) => word.includes('y') || word.includes('u')
);
console.log('Words with u or y:', wordWithYandU);

//Filter the numbers that are multiples of both 5 or 3
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isMultipleOf3Or5 = numberArray.filter(
  (num) => num % 3 === 0 || num % 5 === 0
);
console.log('Number multiples of 3 or 5:', isMultipleOf3Or5);
