//Log the first element and the rest of the elements in an array
const logFirstAndRest = (a, ...rest) => {
    console.log('First:', a);
    console.log('Rest:', rest);
  };
  logFirstAndRest(1, 2, 3, 4, 5);
  
  //Log the first and second element and the rest of the elements in an array
  const logFirstAndSecond = (a, b, ...rest) => {
    console.log('First:', a);
    console.log('Second:', b);
    console.log('Rest:', rest);
  };
  logFirstAndSecond(12, 22, 33, 44, 55);
  
  //Calculate the product of numeric values
  const calculateProduct = (...rest) => {
    let product = 1;
    for (let i = 0; i < rest.length; i++) {
      product *= rest[i];
    }
    return product;
  };
  console.log(calculateProduct(2, 3, 4)); // Output: 24
  console.log(calculateProduct(5, 2, 1, 3)); // Output: 30
  
  //Concatenate an arbitrary number of words into a sentence.
  const createSentence = (...rest) => rest.join(' ');
  console.log(createSentence('JavaScript', 'is', 'awesome'));
  
  //Calculate the sum of numeric values.
  const findSum = (...rest) => {
    let sum = 0;
    for (const num of rest) {
      sum += num;
    }
    return sum;
  };
  console.log('Sum of Numbers:', findSum(2, 4, 6, 8, 10));
  
  //check if value is present
  const containsValue = (item, ...rest) => {
    for (const num of rest) {
      if (item === num) {
        return true;
      }
    }
    return false;
  };
  console.log(containsValue(3, 1, 2, 3, 4)); // Output: true
  console.log(containsValue('apple', 'banana', 'orange')); // Output: false
  
  //Find the average of an arbitrary number of numeric values.
  const calculateAverage = (...rest) => {
    let sum = 0;
    for (const num of rest) {
      sum += num;
    }
    return sum / rest.length;
  };
  console.log(calculateAverage(10, 5, 15)); // Output: 10
  console.log(calculateAverage(2, 4, 6, 8)); // Output: 5
  