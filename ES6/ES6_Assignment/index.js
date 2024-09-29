//Arrow function that takes any number of strings and concatenates them into one string.
const concatenateStrings = (...rest) => `${rest.join(' ')}`;
console.log(concatenateStrings('Hello', 'world', '!'));
console.log(concatenateStrings('JavaScript', 'is', 'fun', 'to', 'learn.'));

//Arrow function that takes two arrays and merges them into one.
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(['a', 'b'], ['c', 'd', 'e']));

//Arrow function that uses the rest parameter to concatenate strings with a specified separator.
const concatenateWithSeparator = (seperator, ...rest) =>
  `${rest.join(seperator)}`;
console.log(concatenateWithSeparator('-', 'apple', 'orange', 'banana'));
console.log(concatenateWithSeparator(', ', 'red', 'green', 'blue', 'yellow'));

//Arrow function that takes an object and extracts its properties using destructuring.
const extractObjectValues = ({ name: Name, age: Age }) =>
  `Name: ${Name}, Age: ${Age}`;
console.log(extractObjectValues({ name: 'Alice', age: 25 }));
console.log(extractObjectValues({ name: 'Bob', age: 30 }));

//Arrow function that takes an array and extracts its elements using destructuring.
const extractArrayValues = ([a, b, c]) => `Values: ${a}, ${b}, ${c}`;
console.log(extractArrayValues([1, 2, 'Hello', 3]));
console.log(extractArrayValues(['apple', 'orange', 'banana']));

//Arrow function that takes a nested object and extracts values using destructuring.
const extractNestedValues = ({ data: { firstName, lastName, age } }) =>
  `${firstName} ${lastName} will be ${age + 5} years old in five years.`;
console.log(
  extractNestedValues({
    data: { firstName: 'Priya', lastName: 'Gupta', age: 20 },
  })
);
console.log(
  extractNestedValues({ data: { firstName: 'John', lastName: 'Doe', age: 25 } })
);

//Function that takes an object, renames and restructures its properties using restructuring.
const printInfo = ({
  name: { firstName: personFirstName, lastName: personLastName },
  department: personDepartment,
}) =>
  `${personFirstName} ${personLastName} works in ${personDepartment} department.`;
console.log(
  printInfo({ name: { firstName: 'John', lastName: 'Doe' }, department: 'IT' })
);
console.log(
  printInfo({
    name: { firstName: 'Alice', lastName: 'Smith' },
    department: 'Legal',
  })
);

//Function that takes an object, provides default values, and extracts their values using restructuring.
const printUserDetails = ({
  name,
  username = 'anonymous',
  post = 'Hello World!',
}) => `${username} posted ${post}`;
console.log(
  printUserDetails({
    name: 'John',
    username: 'john',
    post: 'Hello this is John. I am from England.',
  })
);
console.log(printUserDetails({}));

//Arrow function to check if a given number is even or odd
const checkEvenOdd = (num) =>
  `${num} is an ${num % 2 === 0 ? 'even' : 'odd'} number.`;
console.log(checkEvenOdd(8));
console.log(checkEvenOdd(15));

//Arrow function to determine if a person is eligible for a discount based on the total purchase amount.
const checkDiscountEligibility = (amount, isPremiumCustomer) =>
  `You are eligible for a ${
    amount > 100 && isPremiumCustomer ? '10%' : '5%'
  } discount.`;
console.log(checkDiscountEligibility(120, true));
console.log(checkDiscountEligibility(90, false));

//Arrow function that takes two objects and uses the spread operator to merge them into a new object.
const object1 = { name: 'Alice', age: 30 };
const object2 = { city: 'London', country: 'UK' };
const mergeTwoObj = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeTwoObj(object1, object2));

//Arrow function that new key-value pair to the object without modifying the original object.
const object = { name: 'Dave', age: 25 };
const addKeyValuePair = (object, key, value) => ({ ...object, [key]: value });
console.log(addKeyValuePair(object, 'city', 'New York'));
