//Transform to array
const data = [
    { key: 'name', value: 'Ashiya' },
    { key: 'age', value: 32 },
    { key: 'city', value: 'Bengaluru' },
  ];
  const transformedArray = data.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {});
  console.log('Transformed Array:', transformedArray);
  
  //Convert to flattened array
  const nestedArray = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const flattenedArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
  console.log('Flattened Array:', flattenedArray);
  
  //Push grades to array
  const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'C' },
    { name: 'Charlie', grade: 'D' },
  ];
  const grades = students.reduce((acc, curr) => acc.concat(curr.grade), []);
  console.log('Students Grade:', grades);
  