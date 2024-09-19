// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const isBirthday = true;
let age = 22;
if (isBirthday) {
  age += 1;
}
console.log('Program 1:');
console.log(`Current Age: ${age}`);
console.log('\n');

console.log('Program 2:');
const passengerAge = 61;
const ticketPrice = 900;
const discountedPrice = ticketPrice - 0.15 * ticketPrice;
if (passengerAge > 60) {
  console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
} else {
  console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
}
console.log('\n');

console.log('Program 3:');
const num1 = 60;
const num2 = 40;
const num3 = 15;
if (num1 < num2 && num1 < num3) {
  console.log(`The first number ${num1} is not the largest`);
} else if (num2 < num1 && num2 < num3) {
  console.log(`The second number ${num2} is not the largest`);
} else {
  console.log(`The third number ${num3} is not the largest`);
}
console.log('\n');

console.log('Program 4:');
console.log('\n');
const cartItems = [
  {
    item: 'Saree',
    price: 500,
  },
  {
    item: 'Kurta',
    price: 300,
  },
  {
    item: 'Jeans',
    price: 900,
  },
  {
    item: 'Shoes',
    price: 400,
  },
];
let totalPrice = 0;
const deleiveryCharge = 99;
console.log('Shopping Cart:');
console.log('-----------------------');
for (let i = 0; i < cartItems.length; i++) {
  console.log(`Item: ${cartItems[i].item}, Price: ${cartItems[i].price}`);
  totalPrice += cartItems[i].price;
}
console.log('-----------------------');
if (totalPrice > 1999) {
  console.log(`Delivery Charges: No Delivery Charge`);
} else {
  totalPrice += deleiveryCharge;
  console.log(`Delivery Charges: 99`);
}
console.log('-----------------------');
console.log(`Total Cart Price:  ${totalPrice}`);
console.log('\n');

console.log('Program 5:');
const num = -39;
if (num > 0) {
  console.log(`Number ${num} is positive.`);
} else if (num < 0) {
  console.log(`Number ${num} is negative.`);
} else {
  console.log(`Number ${num} is zero.`);
}
console.log('\n');

console.log('Program 6:');
const marks1 = 85;
const marks2 = 90;
const marks3 = 78;
const student1 = 'Rahul';
const student2 = 'Priya';
const student3 = 'Tina';
if (marks1 > marks2 && marks1 > marks3) {
  console.log(`${student1} has the highest marks: ${marks1}`);
} else if (marks2 > marks1 && marks2 > marks3) {
  console.log(`${student2} has the highest marks: ${marks2}`);
} else {
  console.log(`${student3} has the highest marks: ${marks3}`);
}
