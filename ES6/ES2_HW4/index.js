//calculate average of numbers in array
const calculateAverage = (numArray) => {
    let sum = 0;
    for (const num of numArray) {
      sum += num;
    }
    return sum / numArray.length;
  };
  console.log(calculateAverage([5, 10, 15]));
  
  //print reversed string
  const reverseString = (str) => {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
  };
  console.log(reverseString('world'));
  
  //Print the longest word
  let longestWord = '';
  const findLongestWord = (wordArray) => {
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].length > longestWord.length) {
        longestWord = wordArray[i];
      }
    }
    return longestWord;
  };
  console.log(findLongestWord(['apple', 'banana', 'grapefruit']));
  
  //Print length of array
  const calculateStringLength = (str) => str.length;
  console.log(calculateStringLength('hello'));
  
  const students = [
    { name: 'Alice', age: 20, grade: 85 },
    { name: 'Bob', age: 22, grade: 92 },
    { name: 'Charlie', age: 17, grade: 88 },
  ];
  
  //calculate average grade
  const calculateAverageGrade = (studentList) => {
    let avgGrade = 0;
    for (let i = 0; i < studentList.length; i++) {
      avgGrade += studentList[i].grade;
    }
    return avgGrade / studentList.length;
  };
  console.log('Average Grade:', calculateAverageGrade(students));
  
  //Return students names
  const getNames = (studentList) => {
    const studentNames = [];
    for (let i = 0; i < studentList.length; i++) {
      studentNames.push(studentList[i].name);
    }
    return studentNames;
  };
  console.log(getNames(students));
  
  //Calculate averagage age
  const calculateAverageAge = (studentList) => {
    let studentsAge = 0;
    for (let i = 0; i < studentList.length; i++) {
      studentsAge += studentList[i].age;
    }
    return studentsAge / studentList.length;
  };
  console.log(calculateAverageAge(students));
  
  //Print students with higher grade
  const highGradeStudents = [];
  const highGrades = (studentsList) => {
    for (let i = 0; i < studentsList.length; i++) {
      if (studentsList[i].grade >= 90) {
        highGradeStudents.push(studentsList[i]);
      }
    }
    return highGradeStudents;
  };
  console.log(highGrades(students));
  
  //Print students with age less than 18
  const studentsWithAgeLessThan18 = [];
  const isAnyBelow18 = (studentsList) => {
    for (let i = 0; i < studentsList.length; i++) {
      if (studentsList[i].age < 18) {
        studentsWithAgeLessThan18.push(studentsList[i]);
      }
    }
    return studentsWithAgeLessThan18;
  };
  console.log(isAnyBelow18(students));
  
  //Print student og given name
  const findStudentByName = (studentsList, name) => {
    for (let i = 0; i < studentsList.length; i++) {
      if (studentsList[i].name === name) {
        return studentsList[i];
      }
    }
  };
  console.log(findStudentByName(students, 'Charlie'));
  
  //Print students with score more than 85
  const studentsGradeMoreThan85 = [];
  const getHighScoreStudents = (studentsList) => {
    for (let i = 0; i < studentsList.length; i++) {
      if (studentsList[i].grade > 85) {
        studentsGradeMoreThan85.push(studentsList[i].name);
      }
    }
    return studentsGradeMoreThan85;
  };
  console.log(getHighScoreStudents(students));
  