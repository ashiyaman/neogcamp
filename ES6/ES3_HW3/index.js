//Function to create a copy of an array and append a new element to it using the spread operator.
const copyAndAppend = (arr, element) => [...arr, element];
console.log(copyAndAppend(['apple', 'orange'], 'banana'));

//Arrow function that creates a copy of an array and appends a new element to it using the spread operator
const copyAndAdd = (arr, element) => [...arr, element];
console.log(copyAndAdd([10, 20], 30));

//Arrow function to merge two arrays
const mergeNameArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeNameArrays(['Alice', 'Bob'], ['John', 'Mac', 'Maze']));

//Arrow function that creates a copy of an object and adds a property using the spread operator
const copyPersonObject = (obj, key, value) => ({ ...obj, [key]: value });
console.log(
  copyPersonObject({ firstName: 'Alice', age: 20 }, 'lastName', 'Johnson')
);

//Arrow function that creates a copy of an object and adds a property using the spread operator
const copyEmployeeObject = (obj, key, value) => ({ ...obj, [key]: value });
console.log(
  copyEmployeeObject(
    { employeeId: 243, name: 'Bob', age: 20 },
    'department',
    'IT department'
  )
);

//Arrow function to merge two objects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects({ x: 'hello' }, { y: 'world' })); // Output: { x: "hello", y: "world" }

//Arrow function that creates a copy of an object with modified properties using the spread operator.
const modifyObjectProperties = (obj1, newValue) => ({ ...obj1, ...newValue });
console.log(modifyObjectProperties({ name: 'Alice', age: 25 }, { age: 30 })); // Output: { name: "Alice", age: 30 }
console.log(
  modifyObjectProperties({ fruit: 'apple', color: 'red' }, { color: 'green' })
);

//Arrow function that creates a copy of an object with modified properties using the spread operator
const mergeObject = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObject({ a: 1, b: 2 }, { b: 3, c: 4 })); // Output: { a: 1, b: 3, c: 4 }

//Arrow function to merge three arrays using the spread operator.
const mergeThreeArrays = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3];
console.log(mergeThreeArrays([11, 12], [15, 16, 17], [20, 21]));

//Arrow function to merge three arrays using the spread operator.
const mergeThreeArray = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3];
console.log(mergeThreeArray([1, true], ['Are', 'You', 'Hungry'], [false, 2]));
