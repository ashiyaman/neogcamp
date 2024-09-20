// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const car = {
  brand: 'Hyundai',
  model: 'Alcazar',
};
console.log('1.1:', car.brand);
console.log('1.2:', car.model);
car.brand = 'Honda';
console.log('1.4:', car);
car.year = 2022;
car.color = 'Blue';
console.log('1.4:', car);
console.log("1.6: properties of 'car' Object");
for (const property in car) {
  console.log(`${property}: ${car[property]}`);
}
console.log('\n');

const citizen = {
  name: 'John Mason',
  age: 35,
  occupation: 'Poet',
};
citizen.age = 68;
console.log('2.1: Updated age:', citizen.age);
citizen.age += 2;
console.log('2.2: Updated age after adding:', citizen.age);
citizen.city = 'Delhi';
console.log("2.3: properties of 'citizen' Object");
for (const property in citizen) {
  console.log(`${property}: ${citizen[property]}`);
}
console.log('\n');

const person = {
  name: 'Ashiya',
  age: 35,
};
person.bp = 'Normal';
console.log(`Is ${person.name} fit to travel?`);
if (person.age > 60 && person.bp === 'Normal') {
  console.log('Fit to travel');
} else {
  console.log('Not fit to travel');
}
