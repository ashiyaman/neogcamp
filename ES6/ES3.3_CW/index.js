//Spread Operators

//Duplicate array
let numberArray = [1, 2, 3];
let newArray = numberArray; // points to same location
newArray.push(4); //will modify the original array as well. Hence spread operator
console.log('Copied Array after pushing new number:', newArray);
console.log(
  'Original array after pushing new number to copied array:',
  numberArray
);

let spreadArray = [...numberArray]; //creates copy of original array. Doesnt modifies original array
console.log('Spread array before pushing new number:', spreadArray);
spreadArray.push(5);
console.log('Spread array after pushing new number:', spreadArray);
console.log(
  'Original array after pushing new number to spread array:',
  numberArray
);

const duplicateArray = (arr) => [...arr];
console.log(duplicateArray(['apple', 'banana']));

//Adding new element to array
const addNewElement = (arr, element) => [...arr, element];
console.log(addNewElement(['kiwi', 'oranges'], 'mango'));

//Combining two array
const combinedArray = (arr1, arr2) => [...arr1, ...arr2];
console.log('Combined Arrays:', combinedArray([11, 12], [13, 14, 15]));

//Copying array of objects
const copyObj = (obj) => ({ ...obj });
console.log(copyObj({ a: 1, b: 2 }));

//Add property to object
const copyObj1 = (obj, key, value) => ({ ...obj, [key]: value });
console.log(copyObj1({ a: 1, b: 2 }, 'c', 3));
