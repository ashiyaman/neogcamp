// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

console.log('Program 1:');
function calculateSalary(hoursWorked, hourlyRate) {
  const totalSalary = hoursWorked * hourlyRate;
  return totalSalary;
}
console.log('Total Salary: Rs.', calculateSalary(178, 40));

console.log('Program 2:');
function calculateBonus(workedHours, marks, salary) {
  let bonus;
  if (workedHours > 25 && marks > 85) {
    bonus = 0.1 * salary;
  } else if (workedHours > 15 && marks > 75) {
    bonus = 0.05 * salary;
  } else {
    bonus = 0;
  }
  salary = salary + bonus;
  return salary;
}
console.log('Salary with bonus: Rs.', calculateBonus(20, 80, 5000));

console.log('Program 3:');
function calculateFinalAmount(price1, quantity1, price2, quantity2) {
  const totalPrice = price1 * quantity1 + price2 * quantity2;
  return totalPrice;
}
console.log('Final Cart Amount: Rs.', calculateFinalAmount(200, 10, 500, 5));

console.log('Program 4:');
function calculateAllowance(age, isStudent, baseAllowance) {
  if (isStudent) {
    if (age < 18) {
      return (baseAllowance += 100);
    } else if (age >= 18 && age <= 25) {
      return (baseAllowance += 50);
    } else {
      return baseAllowance;
    }
  } else {
    return baseAllowance;
  }
}
console.log('Allowance: Rs.', calculateAllowance(16, true, 500));

console.log('Program 5:');
function calculateShippingCost(totalWeight, country, baseCost) {
  if (totalWeight <= 1 && country === 'Local') {
    return (baseCost += 10);
  } else if (totalWeight > 20 && country === 'International') {
    return (baseCost += 20);
  } else {
    return baseCost;
  }
}
console.log('Shipping Cost: Rs.', calculateShippingCost(0.5, 'Local', 50));
