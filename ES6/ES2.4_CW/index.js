//arrow function to return the sum of all numbers in array
const calculateSum = (numArr) => {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
      sum += numArr[i];
    }
    return sum;
  };
  console.log(calculateSum([2, 3, 4, 5]));
  
  //arrow function to reverse string
  const reverseStr = (str) => {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  };
  console.log(reverseStr('hello world'));
  