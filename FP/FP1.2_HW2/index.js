//Students marks
const students = [
    { name: 'Alice', score: 85 },
  
    { name: 'Bob', score: 55 },
  
    { name: 'Charlie', score: 75 },
  ];
  const isStudentPassed = students.map((student) => ({
    ...student,
    passed: student.score >= 60 ? true : false,
  }));
  console.log('Is student passed?', isStudentPassed);
  
  //Convert durations to minutes
  const songs = [
    { title: 'Bohemian Rhapsody', duration: 367 },
  
    { title: 'Hotel California', duration: 420 },
  
    { title: 'Stairway to Heaven', duration: 482 },
  ];
  const convertToMins = songs.map((song) => ({
    ...song,
    duration: (song.duration / 60).toFixed(1),
  }));
  console.log('Song duration:', convertToMins);
  
  //calculate the annual income
  const employees = [
    { name: 'Alice', salary: 50000 },
  
    { name: 'Bob', salary: 60000 },
  
    { name: 'Charlie', salary: 70000 },
  ];
  const calculateAnnualIncome = employees.map((employee) => ({
    ...employee,
    annualIncome: employee.salary * 12,
  }));
  console.log('Employee annual salary:', calculateAnnualIncome);
  
  //Is person adult
  const newStudents = [
    { name: 'Alice', age: 22 },
  
    { name: 'Bob', age: 17 },
  
    { name: 'Charlie', age: 25 },
  ];
  const isAdult = newStudents.map((student) => ({
    ...student,
    classification: student.age >= 18 ? 'Adult' : 'Minor',
  }));
  console.log('Is student minor?', isAdult);
  
  //Add $ sign to the salaries
  const employeeSalaries = [
    { name: 'Emily', salary: 60000 },
  
    { name: 'David', salary: 45000 },
  
    { name: 'Grace', salary: 75000 },
  ];
  const add$ToSalary = employeeSalaries.map((employee) => ({
    ...employee,
    salary: `$${employee.salary}`,
  }));
  console.log('Employee salary:', add$ToSalary);
  
  //Is product expensive
  const products = [
    { name: 'Laptop', price: 1200 },
  
    { name: 'Headphones', price: 50 },
  
    { name: 'Smartphone', price: 800 },
  ];
  const isProductExpensive = products.map((product) => ({
    name: product.name,
    label: product.price >= 100 ? 'Expensive' : 'Affordable',
  }));
  console.log('Is product expensive?', isProductExpensive);
  
  //categorise books
  const books = [
    { title: 'The Catcher in the Rye', year: 1951 },
  
    { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },
  
    { title: 'The Hunger Games', year: 2008 },
  ];
  const categoriseBooks = books.map((book) => ({
    title: book.title,
    category: book.year >= 2000 ? 'Modern' : 'Classic',
  }));
  console.log('Books with category:', categoriseBooks);
  
  //Calculate their annual income
  const weeksPerYear = 50;
  const developers = [
    { name: 'John', hourlyRate: 40, hoursPerWeek: 30 },
  
    { name: 'Lisa', hourlyRate: 50, hoursPerWeek: 35 },
  
    { name: 'Mike', hourlyRate: 45, hoursPerWeek: 40 },
  ];
  const calcAnnualIncome = developers.map((developer) => ({
    name: developer.name,
    annualIncome: developer.hoursPerWeek * developer.hourlyRate * weeksPerYear,
  }));
  console.log('Developers annual salary:', calcAnnualIncome);
  
  //Calculate their annual income assuming a fixed base salary of $50000.
  const salesReps = [
    { name: 'David', monthlyCommission: 8000 },
  
    { name: 'Helen', monthlyCommission: 10000 },
  
    { name: 'Ivan', monthlyCommission: 6000 },
  ];
  const calculateAnnualSalary = salesReps.map((salesRep) => ({
    name: salesRep.name,
    annualIncome: salesRep.monthlyCommission * 12 + 50000,
  }));
  console.log('Sales Rep Annual Income:', calculateAnnualSalary);
  
  //Convert scores to grades
  const studentsWithScores = [
    { name: 'Alice', score: 85 },
  
    { name: 'Bob', score: 60 },
  
    { name: 'Charlie', score: 92 },
  ];
  
  const convertToGrades = studentsWithScores.map((student) => ({
    name: student.name,
    grade:
      student.score >= 90
        ? 'A'
        : student.score >= 80
        ? 'B'
        : student.score >= 70
        ? 'C'
        : student.score >= 60
        ? 'D'
        : 'F',
  }));
  console.log('Students grades:', convertToGrades);
  