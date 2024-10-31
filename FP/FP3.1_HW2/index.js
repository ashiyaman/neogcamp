//Find the total length of all strings using `.reduce()`.
const stationeryWords = [
    'pen',
  
    'notebook',
  
    'eraser',
  
    'notebook',
  
    'pencil',
  
    'notebook',
  
    'pencil',
  ];
  const strLength = stationeryWords.reduce((acc, curr) => acc + curr.length, 0);
  console.log('Length of string:', strLength);
  
  //Find the sum of all even number using `.reduce()`
  const numbersArray = [1, 2, 3, 4, 5, 6];
  const sumOfEvenNums = numbersArray.reduce(
    (acc, curr) => (curr % 2 === 0 ? acc + curr : acc),
    0
  );
  console.log('Sum of even numbers:', sumOfEvenNums);
  
  //Count the number of odd numbers using `.reduce()`.
  const numsArr = [11, 22, 32, 14, 15, 62, 17, 18, 29, 10];
  const numOfOddNums = numsArr.reduce(
    (acc, curr) => (curr % 2 !== 0 ? acc + 1 : acc),
    0
  );
  console.log('Number of odd nums:', numOfOddNums);
  
  //Create an object with the count of even and odd numbers using `.reduce()`.
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const oddEvenCount = nums.reduce(
    (acc, curr) => {
      curr % 2 === 0 ? (acc.even = acc.even + 1) : (acc.odd = acc.odd + 1);
      return acc;
    },
    { even: 0, odd: 0 }
  );
  console.log('Odd Even Count:', oddEvenCount);
  
  //Create an object with the count of positive and negative numbers
  const allNumns = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];
  const numCount = allNumns.reduce(
    (acc, curr) => {
      curr > 0 ? (acc.pos += 1) : (acc.neg += 1);
      return acc;
    },
    { pos: 0, neg: 0 }
  );
  console.log('Count of positive and negative numbers:', numCount);
  
  //Find the product of negative numbers
  const numPositive = [-2, 3, 4, 0, -5, 6];
  const productNegativeNums = numPositive.reduce(
    (acc, curr) => (curr < 0 ? acc * curr : acc),
    1
  );
  console.log('Product of negative numbers:', productNegativeNums);
  
  //apitalize all the letter of each word and concatenate them into a single string using `.reduce()`.
  const wordsCaps = ['reduce', 'method', 'needs', 'a', 'lot', 'of', 'practice'];
  const capitalizeStr = wordsCaps.reduce(
    (acc, curr) => `${acc} ${curr.toUpperCase()}`,
    ''
  );
  console.log('Capitalized words:', capitalizeStr);
  
  //Create an object with the count of positive even numbers and count of all the other numbers using `.reduce()`.
  const allNumsArr = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];
  const countPosEvenNum = allNumsArr.reduce(
    (acc, curr) => {
      curr % 2 === 0 && curr > 0 ? (acc.posEven += 1) : (acc.others += 1);
      return acc;
    },
    { posEven: 0, others: 0 }
  );
  console.log('Postive even nums count:', countPosEvenNum);
  
  //Find the sum of all negative odd number using `.reduce()`.
  const numbersArr = [1, -2, -3, 4, -5, 6, 7, -9, 12, 11];
  const countNegOddNum = numbersArr.reduce(
    (acc, curr) => (curr % 2 !== 0 && curr < 0 ? acc + curr : acc),
    0
  );
  console.log('Negative Odd nums count:', countNegOddNum);
  
  //Concatenate all letters into a single word using `.reduce()`
  const letters = ['a', 'l', 'p', 'h', 'a', 'b', 'e', 't'];
  const makeWord = letters.reduce((acc, curr) => acc + curr, '');
  console.log('Concatenate letters:', makeWord);
  