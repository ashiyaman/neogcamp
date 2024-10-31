//Filter out the students with a grade lower than 70%
const students = [
    { name: 'Alice', grade: 80 },
    { name: 'Bob', grade: 65 },
    { name: 'Charlie', grade: 90 },
  ];
  const filterStudents = students.filter((student) => student.grade < 70);
  console.log('Students with grade lower than 70%:', filterStudents);
  
  //Filter out the products with a price higher than $1000
  const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Smartphone', price: 800 },
    { name: 'Tablet', price: 500 },
  ];
  const filterProducts = products.filter((product) => product.price > 1000);
  console.log('Products with a price higher than $1000:', filterProducts);
  
  //Filter out the employees with a salary lower than $50,000
  const employees = [
    { name: 'Alice', salary: 60000 },
    { name: 'Bob', salary: 45000 },
    { name: 'Charlie', salary: 70000 },
  ];
  const filterEmployees = employees.filter((employee) => employee.salary < 50000);
  console.log('Employees with a salary lower than $50,000:', filterEmployees);
  
  //Filter out movies with a rating lower than 7.0
  const movies = [
    { title: 'Inception', rating: 8.8 },
    { title: 'Interstellar', rating: 8.6 },
    { title: 'The Dark Knight', rating: 9.0 },
  ];
  const filterMovies = movies.filter((movie) => movie.rating > 7);
  console.log('Movies with a rating lower than 7.0:', filterMovies);
  
  //Filter out the cars older than 5 years
  const cars = [
    { brand: 'Toyota', year: 2018 },
    { brand: 'Honda', year: 2019 },
    { brand: 'Ford', year: 2010 },
  ];
  const filterCars = cars.filter(
    (car) => new Date().getFullYear() - car.year <= 5
  );
  console.log('Cars older than 5 years:', filterCars);
  
  //Filter out the  students with a GPA lower than 3.5
  const studentsWithGPA = [
    { name: 'Alice', gpa: 3.8 },
    { name: 'Bob', gpa: 3.2 },
    { name: 'Charlie', gpa: 3.9 },
  ];
  const filterStudentGpa = studentsWithGPA.filter((student) => student.gpa > 3.5);
  console.log('Students with a GPA lower than 3.5:', filterStudentGpa);
  
  //Filter out the fruits with a price higher than $2.00 per pound
  const fruits = [
    { name: 'Apple', pricePerPound: 1.5 },
    { name: 'Banana', pricePerPound: 2.2 },
    { name: 'Orange', pricePerPound: 1.8 },
  ];
  const filterFruits = fruits.filter((fruit) => fruit.pricePerPound > 2.0);
  console.log('Fruits with a price higher than $2.00 per pound:', filterFruits);
  
  //Filter out the employees who are not currently employed
  const employeesWithStatus = [
    { name: 'Alice', employed: true },
    { name: 'Bob', employed: false },
    { name: 'Charlie', employed: true },
  ];
  const filterEmployedStatus = employeesWithStatus.filter(
    (employee) => employee.employed === false
  );
  console.log('Employees who are not currently employed:', filterEmployedStatus);
  
  //Filter out the products that are not in stock.
  const productsWithStock = [
    { name: 'Laptop', inStock: true },
    { name: 'Smartphone', inStock: false },
    { name: 'Tablet', inStock: true },
  ];
  const filterStockProducts = productsWithStock.filter(
    (product) => product.inStock === false
  );
  console.log('Products that are not in stock:', filterStockProducts);
  
  //Filter out the laptops with a screen size less than 15 inches
  const laptops = [
    { brand: 'Dell', screenSize: 14 },
    { brand: 'HP', screenSize: 15.6 },
    { brand: 'Lenovo', screenSize: 13 },
    { brand: 'Acer', screenSize: 17 },
  ];
  const filterLaptops = laptops.filter((laptop) => laptop.screenSize < 15);
  console.log('Laptops with a screen size less than 15 inches:', filterLaptops);
  