//The function should return a new array containing only the books from the "Fantasy" genre.

const books = [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: 'J.K. Rowling',
      genre: 'Fantasy',
    },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Drama' },
    { title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
  ];
  const fantasyBooks = books.filter((book) => book.genre === 'Fantasy');
  console.log('Fantasy Books:', fantasyBooks);
  
  //Filter out the movies released before 2010, with a rating less than 8.0, and not in the "Action" or "Adventure" genre.
  const movies = [
    { title: 'Inception', year: 2010, rating: 8.8, genre: 'Sci-Fi' },
    { title: 'The Dark Knight', year: 2008, rating: 9.0, genre: 'Action' },
    { title: 'Interstellar', year: 2014, rating: 8.6, genre: 'Sci-Fi' },
    { title: 'Tripple Frontier', year: 2023, rating: 9.0, genre: 'Action' },
    { title: 'Jurassic Park', year: 1993, rating: 8.1, genre: 'Adventure' },
  ];
  const filterMovies = movies.filter(
    (movie) =>
      movie.year > 2010 &&
      movie.rating > 8 &&
      (movie.genre === 'Action' || movie.genre === 'Adventure')
  );
  console.log('Filter Movies:', filterMovies);
  
  //Filter out the restaurants with less than 4 stars, not serving Italian cuisine, and not open on Sundays
  const restaurants = [
    {
      name: 'Pasta Paradise',
      stars: 4.5,
      cuisine: 'Italian',
      openOnSundays: false,
    },
    {
      name: 'Sushi Sensation',
      stars: 3.8,
      cuisine: 'Japanese',
      openOnSundays: true,
    },
    {
      name: 'Burger Binge',
      stars: 4.2,
      cuisine: 'American',
      openOnSundays: true,
    },
    { name: 'Nasi', stars: 4.5, cuisine: 'Italian', openOnSundays: true },
  ];
  const filterRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.stars > 4 &&
      restaurant.cuisine === 'Italian' &&
      restaurant.openOnSundays === true
  );
  console.log('Filtered Restaurants:', filterRestaurants);
  
  //Write a function that takes an array of objects with name, price and quantity, and returns a new array with only the names containing bread.
  const products = [
    { name: 'Bread', price: 480, quantity: 3 },
    { name: 'Clips', price: 200, quantity: 5 },
    { name: 'green Bread Knife', price: 3077, quantity: 1 },
    { name: 'Slipper', price: 150, quantity: 2 },
  ];
  const filterProducts = products
    .filter((product) => product.name.includes('Bread'))
    .reduce((acc, curr) => acc.concat(curr.name), []);
  console.log('Filtered Products:', filterProducts);
  
  //Calculate and add a new property indicating whether their salary is above or below the average salary of all employees using .map(). Use .reduce() to calculate the average salary.
  const employees = [
    { name: 'David', salary: 60000 },
    { name: 'Emma', salary: 75000 },
    { name: 'Alex', salary: 90000 },
    { name: 'Sophie', salary: 55000 },
  ];
  const totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);
  const avgSalary = totalSalary / employees.length;
  
  const filterEmployees = employees.map((employee) => ({
    ...employee,
    aboveAverage: employee.salary > avgSalary ? true : false,
  }));
  console.log('Filtered Employees:', filterEmployees);
  
  //Write a function that takes an array  of objects with name, role, and array of hours which represents the time the person spends on the server each day. Find the person who is the most active in the community and spends most of the time in it using reduce() method.
  const community = [
    { name: 'Raju', role: 'student', hours: [1, 2, 3, 1, 2, 3, 0] },
    { name: 'Aakash', role: 'mentor', hours: [1, 2, 3, 1, 2, 3, 0] },
    { name: 'Ramesh', role: 'student', hours: [1, 2, 3, 1, 2, 3, 3] },
    { name: 'Jiten', role: 'TA', hours: [2, 2, 3, 5, 2, 3, 0] },
    { name: 'Harsh', role: 'student', hours: [1, 7, 3, 2, 2, 3, 0] },
    { name: 'Akshay', role: 'student', hours: [1, 6, 3, 1, 2, 3, 0] },
    { name: 'Rohan', role: 'mentor', hours: [1, 2, 3, 12, 2, 3, 0] },
    { name: 'Mohan', role: 'student', hours: [1, 8, 3, 0, 2, 3, 0] },
  ];
  const mostActivePerson = community.reduce(
    (mostActive, member) => {
      const totalHours = member.hours.reduce((acc, curr) => acc + curr, 0);
      if (totalHours > mostActive.totalHours) {
        return { ...member, totalHours };
      } else {
        return mostActive;
      }
    },
    { totalHours: 0 }
  );
  
  const { totalHours, ...mostActiveWithoutTotalHours } = mostActivePerson;
  console.log('Most Active Member:', mostActiveWithoutTotalHours);
  
  //Write a function that takes an array of objects with name, role and array of hours which represents the time a person spends on the server each day. Give the tag of regular to students who are active in the community and spends more than 20 hours a week.
  const communityData = [
    { name: 'Raju', role: 'student', hours: [1, 2, 3, 1, 2, 3, 0] },
    { name: 'Aakash', role: 'mentor', hours: [1, 2, 3, 4, 5, 6, 7] },
    { name: 'Ramesh', role: 'student', hours: [4, 5, 6, 4, 5, 6, 0] },
    { name: 'Jiten', role: 'TA', hours: [2, 2, 3, 5, 2, 3, 0] },
    { name: 'Harsh', role: 'student', hours: [7, 8, 9, 7, 8, 9, 0] },
    { name: 'Akshay', role: 'student', hours: [1, 3, 5, 7, 9, 0, 2] },
    { name: 'Rohan', role: 'mentor', hours: [1, 2, 3, 12, 2, 3, 0] },
    { name: 'Mohan', role: 'student', hours: [4, 6, 8, 0, 1, 9, 2] },
  ];
  const isRegular = communityData.map((member) => {
    const totalHours = member.hours.reduce((acc, curr) => acc + curr, 0);
    member =
      totalHours > 20 && member.role === 'student'
        ? { ...member, tag: 'regular' }
        : { ...member };
    return member;
  });
  console.log('Regular Active memeber:', isRegular);
  