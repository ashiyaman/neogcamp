//Arrow function that creates an object with a dynamic field based on the provided key and value.
const createObjectWithDynamicField = (key, value) => ({ [key]: value });
console.log(createObjectWithDynamicField('name', 'Alice'));
console.log(createObjectWithDynamicField('age', 25));

//Arrow function that adds a dynamic field to an existing object.
const addObjectField = (obj, key, value) => ({ ...obj, [key]: value });
console.log(addObjectField({ name: 'Bob', age: 30 }, 'city', 'New York'));
console.log(addObjectField({ fruit: 'apple', color: 'red' }, 'quantity', 3));

//Arrow function that adds a dynamic field to an existing object.
const addObjField = (obj, key, value) => ({ ...obj, [key]: value });
console.log(
  addObjField(
    { productName: 'Side Table', color: 'Walnut Brown' },
    'inStock',
    true
  )
);
console.log(
  addObjField({ productName: 'Dining Table', color: 'White' }, 'inStock', false)
);

//Arrow function that updates a field dynamically in an existing object.
const updateObjectField = (obj, key, value) => ({ ...obj, [key]: value });
console.log(updateObjectField({ name: 'Charlie', age: 28 }, 'age', 29));
console.log(
  updateObjectField({ city: 'Paris', country: 'France' }, 'country', 'Spain')
);

//Arrow function that updates a field dynamically in an existing object.
const updateProductObject = (obj, key, value) => ({ ...obj, [key]: value });
console.log(
  updateProductObject(
    { productName: 'Side Table', inStock: true },
    'inStock',
    false
  )
);
console.log(
  updateProductObject(
    { productName: 'Dining Table', color: 'White', inStock: false },
    'inStock',
    true
  )
);

//Arrow function that dynamically generates an object with multiple fields.
const generateObject = (a, b, c, d) => ({ [a]: b, [c]: d });
console.log(generateObject('animal', 'Dog', 'sound', 'Bark'));
console.log(generateObject('fruit', 'Banana', 'color', 'Yellow'));

//Arrow function that dynamically generates an object with multiple fields.
const generateObj1 = (key1, value1, key2, value2, key3, value3) => ({
  [key1]: value1,
  [key2]: value2,
  [key3]: value3,
});
console.log(
  generateObj1('mealType', 'Lunch', 'meal', 'Rice-Dal', 'calorie', '200 Cal')
);
console.log(
  generateObj1(
    'mealType',
    'Dinner',
    'meal',
    'Chapati-Dal',
    'calorie',
    '180 Cal'
  )
);

//arrow function that creates an object with a dynamic field based on the provided key and value.
const createNewObjectWithDynamicField = (...objData) => {
  let dynamicObj = {};
  for (let i = 0; i < objData.length; i + 2) {
    const key = objData[i];
    const value = objData[i + 1];
    dynamicObj[key] = value;
  }
  return dynamicObj;
};
console.log(
  createNewObjectWithDynamicField(
    'name',
    'Maze',
    'favColor',
    'Pink',
    'isMarried',
    false
  )
);
// Output: { name: "Maze", favColor: "Pink", isMarried: false }

console.log(
  createNewObjectWithDynamicField(
    'age',
    35,
    'hobby',
    'Cooking',
    'isMarried',
    true
  )
);
