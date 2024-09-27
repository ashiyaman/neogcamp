//Shorthand property

let personName = 'Alice';
let age = 22;
const obj = {
  personName: personName,
  age: age,
};

const obj1 = { personName, age }; //shorthand

const createPerson = (personName, age) => ({ personName, age });
console.log(createPerson(personName, age));
