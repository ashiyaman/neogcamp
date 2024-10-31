//Extract the titles
const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  
    { title: '1984', author: 'George Orwell' },
  ];
  const getTitle = books.map((book) => book.title);
  console.log('Array with title of book: ', getTitle);
  
  //Convert names to uppercase
  const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'kiwi', color: 'brown' },
  ];
  const convertToUppercase = fruits.map((fruit) => ({
    ...fruit,
    name: fruit.name.toUpperCase(),
  }));
  console.log('Fruits with name in Uppercase: ', convertToUppercase);
  
  //increase each salary by 10%
  const employees = [
    { name: 'Alice', salary: 50000 },
    { name: 'Bob', salary: 60000 },
    { name: 'Charlie', salary: 70000 },
  ];
  const salaryWithBonus = employees.map((employee) => ({
    ...employee,
    salary: (employee.salary + employee.salary * 0.1).toFixed(2),
  }));
  console.log('Employee Salary with bonus:', salaryWithBonus);
  
  //Discounted price
  const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 500 },
    { name: 'Headphones', price: 100 },
  ];
  const discountedPrice = products.map((product) => ({
    ...product,
    price: product.price - product.price * 0.2,
  }));
  console.log('Discounted laptop price:', discountedPrice);
  
  //Convert celcius to farenheit
  const cities = [
    { name: 'New York', temperature: 25 },
    { name: 'Los Angeles', temperature: 30 },
    { name: 'Chicago', temperature: 20 },
  ];
  const convertToFarenheit = cities.map((city) => ({
    ...city,
    temperature: (city.temperature * 9.0) / 5.0 + 32.0,
  }));
  console.log('Temperature of cities: ', convertToFarenheit);
  
  //Calculate annual income
  const teachers = [
    { name: 'Olivia', monthlySalary: 4500 },
    { name: 'Paul', monthlySalary: 5500 },
    { name: 'Rachel', monthlySalary: 5000 },
  ];
  const calculateIncome = teachers.map((teacher) => ({
    name: teacher.name,
    annualIncome: teacher.monthlySalary * 12 + 500,
  }));
  console.log('Calculate monthly salary:', calculateIncome);
  
  //Calculate population density
  const countries = [
    { name: 'USA', population: 331000000, landArea: 9833517 },
    { name: 'India', population: 1393000000, landArea: 2973190 },
    { name: 'Brazil', population: 213993437, landArea: 8515767 },
  ];
  const calculateDensity = countries.map((country) => ({
    name: country.name,
    populationDensity: country.population / country.landArea,
  }));
  console.log('Country with population density:', calculateDensity);
  