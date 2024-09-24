//function to return person's firstname and lastname
const getFirstAndLastname = (firstName, lastName) => ({
    FirstName: firstName,
    LastName: lastName,
  });
  console.log(getFirstAndLastname('Ashiya', 'Amanulla'));
  
  //function to count length of string and convert to uppercase
  const convertString = (str) => ({
    Length: str.length,
    Uppercase: str.toUpperCase(),
  });
  console.log(convertString('javascript'));
  
  //function to concatenate string and count length of string
  const concatenateString = (str1, str2) => ({
    Concatenation: str1 + str2,
    CharCount: str1.length + str2.length,
  });
  console.log(concatenateString('hello ', 'javascript'));
  
  //calculate circumference and area
  const calculateCircleProperties = (radius) => ({
    circumference: 2 * Math.PI * radius,
    Area: Math.PI * radius ** 2,
  });
  console.log(calculateCircleProperties(5));
  
  //calculate Difference and Quotient
  const calculateDifferenceAndQuotient = (num1, num2) => ({
    Difference: num1 - num2,
    Quotient: num1 / num2,
  });
  console.log(calculateDifferenceAndQuotient(10, 2));
  
  //calculate word count
  const analyzeSentence = (sentence) => {
    if (sentence !== '') {
      let count = 1;
      for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
          count++;
        }
      }
      return { Wordcount: count };
    }
    return { Wordcount: 0 };
  };
  console.log(analyzeSentence('JavaScript is fun'));
  
  //calculate square and cube
  const calculateSquareAndCube = (num) => ({
    Square: num ** 2,
    Cube: num ** 3,
  });
  console.log(calculateSquareAndCube(4));
  
  //check if number is positive or not
  const checkNumber = (num) => {
    if (num <= 0) {
      return { isPositive: false, isNegative: true };
    }
    return { isPositive: true, isNegative: false };
  };
  console.log(checkNumber(-7));
  console.log(checkNumber(5));
  