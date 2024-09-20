// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const studentsData = [
  {
    name: 'Rahul',
    rollNo: 101,
    hindi: 80,
    english: 75,
    maths: 90,
  },
  {
    name: 'Amit',
    rollNo: 102,
    hindi: 85,
    english: 70,
    maths: 95,
  },
  {
    name: 'Priya',
    rollNo: 103,
    hindi: 78,
    english: 92,
    maths: 87,
  },
];

const marksForComputer = [88, 92, 95];
console.log(`1.1: Students data with Computer Marks`);
for (let i = 0; i < studentsData.length; i++) {
  studentsData[i].computer = marksForComputer[i];
  console.log(
    `Name: ${studentsData[i].name}, Roll No: ${studentsData[i].rollNo}, Hindi: ${studentsData[i].hindi}, English: ${studentsData[i].english}, Maths: ${studentsData[i].maths}, Computer: ${studentsData[i].computer}`
  );
}
console.log('\n');

const marksForScience = [82, 90, 88];
console.log(`1.2: Students data with Science Marks`);
for (let i = 0; i < studentsData.length; i++) {
  studentsData[i].science = marksForScience[i];
  console.log(
    `Name: ${studentsData[i].name}, Roll No: ${studentsData[i].rollNo}, Hindi: ${studentsData[i].hindi}, English: ${studentsData[i].english}, Maths: ${studentsData[i].maths}, Computer: ${studentsData[i].computer}, Science: ${studentsData[i].science}`
  );
}
console.log('\n');

const studentKaveri = {
  name: 'Kaveri',
  rollNo: 104,
  hindi: 84,
  english: 88,
  maths: 78,
  computer: 90,
  science: 86,
};
studentsData.push(studentKaveri);
console.log("2.1: Kaveri's Data", studentKaveri);
console.log('\n');

console.log('2.2: Updated Students Data with Kaveri', studentsData);
console.log('\n');

console.log('2.3: Updated Students Data with Total Marks');
for (let i = 0; i < studentsData.length; i++) {
  const totalMarks =
    studentsData[i].hindi +
    studentsData[i].english +
    studentsData[i].maths +
    studentsData[i].computer +
    studentsData[i].science;
  studentsData[i].totalMarks = totalMarks;
  console.log(
    `Name: ${studentsData[i].name}, Roll No: ${studentsData[i].rollNo}, Total Marks: ${studentsData[i].totalMarks}`
  );
}
console.log('\n');

function getGrade(avgMarks) {
  let grade = '';
  if (avgMarks >= 90 && avgMarks <= 100) {
    grade = 'A';
  } else if (avgMarks >= 80 && avgMarks <= 89) {
    grade = 'B';
  } else if (avgMarks >= 70 && avgMarks <= 79) {
    grade = 'C';
  } else if (avgMarks >= 60 && avgMarks <= 69) {
    grade = 'D';
  } else if (avgMarks >= 50 && avgMarks <= 59) {
    grade = 'E';
  } else {
    grade = 'F';
  }
  return grade;
}

console.log('2.4: Updated Students Data with Average Marks');
for (let i = 0; i < studentsData.length; i++) {
  const avgMarks = studentsData[i].totalMarks / 5;
  studentsData[i].avgMarks = avgMarks;
  console.log(
    `Name: ${studentsData[i].name}, Roll No: ${studentsData[i].rollNo}, Average Marks: ${studentsData[i].avgMarks}`
  );
}
console.log('\n');

for (let i = 0; i < studentsData.length; i++) {
  studentsData[i].grade = getGrade(studentsData[i].avgMarks);

  console.log(`
    ===== Report Card for ${studentsData[i].name} =====
    Roll No. : ${studentsData[i].rollNo}
    -----
    Marks
    -----
    Hindi: ${studentsData[i].hindi}
    English: ${studentsData[i].english}
    Maths: ${studentsData[i].maths}
    Computer: ${studentsData[i].computer}
    Science: ${studentsData[i].science}
    -----
    Total: ${studentsData[i].totalMarks}
    Average: ${studentsData[i].avgMarks}
    Grade: ${studentsData[i].grade}
    ----- ----- ----- -----
    `);
}
