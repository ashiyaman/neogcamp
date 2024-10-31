//Filter out the phones released before 2020 and with a camera resolution less than 12 megapixels.
const smartphones = [
    { brand: 'iPhone', year: 2019, cameraResolution: 12.2 },
    { brand: 'Samsung', year: 2021, cameraResolution: 13 },
    { brand: 'Google Pixel', year: 2018, cameraResolution: 11 },
  ];
  const filterSmartPhones = smartphones.filter(
    (smartPhone) => smartPhone.year > 2010 && smartPhone.cameraResolution >= 13
  );
  console.log(
    'Filter out phones released before 2020 and with a camera resolution less than 12 megapixels:',
    filterSmartPhones
  );
  
  //Filter out the books published before 2005 and with more than 400 pages
  const books = [
    { title: 'The Da Vinci Code', year: 2003, pages: 454 },
    { title: 'The Alchemist', year: 1988, pages: 197 },
    { title: 'The Hunger Games', year: 2008, pages: 374 },
  ];
  const filterBooks = books.filter(
    (book) => book.year > 2005 && book.pages < 400
  );
  console.log(
    'Filter out books published before 2005 and with more than 400 pages:',
    filterBooks
  );
  
  //Filter out the students with an age less than 18 and a GPA lower than 3.5
  const students = [
    { name: 'Alice', age: 20, gpa: 3.8 },
    { name: 'Bob', age: 17, gpa: 3.2 },
    { name: 'Charlie', age: 19, gpa: 3.9 },
  ];
  const filterStudents = students.filter(
    (student) => student.age > 18 && student.gpa > 3.5
  );
  console.log(
    'Filter out students with an age less than 18 and a GPA lower than 3.5:',
    filterStudents
  );
  
  //Filter out the employees with a salary less than $50,000 and hired before 2010
  const employees = [
    { name: 'Emily', salary: 55000, hireYear: 2008 },
    { name: 'David', salary: 48000, hireYear: 2012 },
    { name: 'Grace', salary: 60000, hireYear: 2006 },
  ];
  const filterEmployees = employees.filter(
    (employee) => employee.salary > 50000 && employee.hireYear > 2010
  );
  console.log(
    'Filter out employees with a salary less than $50,000 and hired before 2010:',
    filterEmployees
  );
  
  //Filter out the products with a price less than $100 and not in stock
  const products = [
    { name: 'Laptop', price: 1200, inStock: true },
    { name: 'Headphones', price: 50, inStock: false },
    { name: 'Smartphone', price: 800, inStock: true },
  ];
  const filterProducts = products.filter(
    (product) => product.price > 100 && product.inStock === true
  );
  console.log(
    'Filter out products with a price less than $100 and not in stock:',
    filterProducts
  );
  
  //Filter out the movies released before 2010, with a rating less than 8.0, and not in the "Action" genre
  const movies = [
    { title: 'Inception', year: 2010, rating: 8.8, genre: 'Sci-Fi' },
    { title: 'The Dark Knight', year: 2008, rating: 9.0, genre: 'Action' },
    { title: 'Avatar', year: 2009, rating: 7.8, genre: 'Adventure' },
    { title: 'The Dune', year: 2018, rating: 6.0, genre: 'Action' },
  ];
  const filterMovies = movies.filter(
    (movie) => movie.year > 2010 && movie.rating > 8 && movie.genre !== 'Action'
  );
  console.log(
    "Filter out movies released before 2010, with a rating less than 8.0, and not in the 'Action' genre:",
    filterMovies
  );
  
  //Filter out the apartments with a price less than $1500, not in a safe neighbourhood, and with less than 2 bedrooms
  const apartments = [
    { location: 'Downtown', price: 1600, bedrooms: 2, safeNeighbourhood: true },
    { location: 'Suburb', price: 1400, bedrooms: 1, safeNeighbourhood: false },
    {
      location: 'City Center',
      price: 1800,
      bedrooms: 3,
      safeNeighbourhood: true,
    },
  ];
  const filterApartments = apartments.filter(
    (apartment) =>
      apartment.price > 1500 &&
      apartment.safeNeighbourhood === true &&
      apartment.bedrooms >= 2
  );
  console.log(
    'Filter out apartments with a price less than $1500, not in a safe neighbourhood, and with less than 2 bedrooms:',
    filterApartments
  );
  
  //Filter out the products with a price less than $50, not available online, and not in the "Electronics" category
  const newProducts = [
    {
      name: 'Laptop',
      price: 800,
      onlineAvailability: true,
      category: 'Electronics',
    },
    {
      name: 'Book',
      price: 20,
      onlineAvailability: false,
      category: 'Literature',
    },
    { name: 'Book', price: 40, onlineAvailability: false, category: 'Classic' },
    {
      name: 'Headphones',
      price: 60,
      onlineAvailability: true,
      category: 'Electronics',
    },
  ];
  const filterNewProducts = newProducts.filter(
    (product) =>
      product.price > 50 &&
      product.onlineAvailability === true &&
      product.category === 'Electronics'
  );
  console.log(
    "Filter out products with a price less than $50, not available online, and not in the 'Electronics' category:",
    filterNewProducts
  );
  
  //Filter out the applicants with less than 3 years of experience, not proficient in English, and without a relevant degree
  const jobApplicants = [
    {
      name: 'Alice',
      experienceYears: 4,
      englishProficiency: true,
      relevantDegree: true,
    },
    {
      name: 'Bob',
      experienceYears: 2,
      englishProficiency: false,
      relevantDegree: true,
    },
    {
      name: 'Charlie',
      experienceYears: 5,
      englishProficiency: true,
      relevantDegree: false,
    },
  ];
  const filterJobApplicants = jobApplicants.filter(
    (jobApplicant) =>
      jobApplicant.experienceYears >= 3 &&
      jobApplicant.englishProficiency === true &&
      jobApplicant.relevantDegree === true
  );
  console.log(
    'Filter out applicants with less than 3 years of experience, not proficient in English, and without a relevant degree:',
    filterJobApplicants
  );
  //Filter out the restaurants with less than 4 stars, not serving vegetarian options, and located outside the city
  const restaurants = [
    {
      name: 'Gourmet Grill',
      stars: 4.5,
      vegetarianOptions: true,
      location: 'City',
    },
    {
      name: 'Fast Noodles',
      stars: 3.8,
      vegetarianOptions: false,
      location: 'Suburb',
    },
    {
      name: 'Healthy Bites',
      stars: 4.2,
      vegetarianOptions: true,
      location: 'City',
    },
    {
      name: 'Chat Street',
      stars: 3.5,
      vegetarianOptions: false,
      location: 'Suburb',
    },
  ];
  const filterRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.stars > 4 &&
      restaurant.vegetarianOptions === true &&
      restaurant.location === 'City'
  );
  console.log(
    'Filter out the restaurants with less than 4 stars, not serving vegetarian options, and located outside the city:',
    filterRestaurants
  );
  
  //Filter out the books published before 2000, with a rating less than 7.5, and not in the "Mystery" or "Thriller" genre
  const newBooks = [
    { title: 'The Da Vinci Code', year: 2003, rating: 8.6, genre: 'Mystery' },
    { title: 'To Kill a Mockingbird', year: 1960, rating: 8.3, genre: 'Drama' },
    { title: 'Gone Girl', year: 2012, rating: 9.0, genre: 'Thriller' },
  ];
  const filterNewBooks = newBooks.filter(
    (book) =>
      book.year > 2000 &&
      book.rating > 7.5 &&
      (book.genre === 'Mystery' || book.genre === 'Thriller')
  );
  console.log(
    "Filter out the books published before 2000, with a rating less than 7.5, and not in the 'Mystery' or 'Thriller' genre:",
    filterNewBooks
  );
  
  //Filter out the employees with less than 5 years of experience, not proficient in English, and not working in the "Engineering" or "Marketing" department
  const newEmployees = [
    {
      name: 'David',
      experienceYears: 6,
      englishProficiency: true,
      department: 'Engineering',
    },
    {
      name: 'Emma',
      experienceYears: 4,
      englishProficiency: false,
      department: 'Finance',
    },
    {
      name: 'Alex',
      experienceYears: 7,
      englishProficiency: true,
      department: 'Marketing',
    },
  ];
  const filterNewEmployees = newEmployees.filter(
    (employee) =>
      employee.experienceYears >= 5 &&
      employee.englishProficiency === true &&
      (employee.department === 'Engineering' ||
        employee.department === 'Marketing')
  );
  console.log(
    "Filter out the employees with less than 5 years of experience, not proficient in English, and not working in the 'Engineering' or 'Marketing' department:",
    filterNewEmployees
  );
  