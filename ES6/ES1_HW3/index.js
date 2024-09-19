// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const arr1 = [5, 12, 7, 25, 18, 3];

function printArray() {
  console.log('Array:', arr1);
}

function addToArray() {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] + 10);
  }
  console.log('Array added 10:', newArr);
}

function oddtoEven() {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 !== 0) {
      newArr.push(arr1[i] + 1);
    } else {
      newArr.push(arr1[i]);
    }
  }
  console.log('Array after odd to event number:', newArr);
}

function divisibleBy2() {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
      newArr.push(arr1[i]);
    }
  }
  console.log('Number divisible by 2:', newArr);
}

function sumOfArray() {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  console.log('Sum of numbers:', sum);
}

function sumOfOddAndEvenNumbers() {
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
      evenSum += arr1[i];
    } else {
      oddSum += arr1[i];
    }
  }
  console.log('Sum of Odd numbers:', oddSum);
  console.log('Sum of Even numbers:', evenSum);
}

printArray();
addToArray();
oddtoEven();
divisibleBy2();
sumOfArray();
sumOfOddAndEvenNumbers();
