const students = [
    { name: 'Alice', age: 23 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 21 },
  ];
  
  //Get name of students
  const getName = students.map((student) => student.name);
  console.log('names of students: ', getName);
  
  //Add grade property to each student object
  const studentswithGrades = students.map((student) => ({
    ...student,
    grade: 'A',
  }));
  console.log('Students with grades: ', studentswithGrades);
  
  const people = [
    { name: 'Alice', weight: 60, height: 1.5 },
    { name: 'Bob', weight: 54, height: 1.75 },
    { name: 'Charlie', weight: 66, height: 1.3 },
  ];
  
  //Calculate BMI and add to each object
  const calculateBMI = people.map((person) => ({
    ...person,
    BMI: (person.weight / person.height ** 2).toFixed(2),
  }));
  console.log('People with BMI: ', calculateBMI);
  
  const person = {
    name: 'Ashiya',
    age: '34',
    city: 'Bengaluru',
  };
  const personInUppercase = Object.values(person).map((value) =>
    value.toUpperCase()
  );
  console.log('Person data in uppercase: ', personInUppercase);
  console.log('Keys in Person Object: ', Object.keys(person));
  