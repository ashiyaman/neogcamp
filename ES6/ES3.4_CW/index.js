//Destructiring

//Extract elements from array
const extractArray = (arr) => {
    const [first, second, third] = arr;
    console.log(first);
    console.log(second);
    console.log(third);
  };
  extractArray([1, 2, 3]);
  
  //Extract elements from objects
  const extractObject = (obj) => {
    const { name, age, city } = obj;
    console.log(`${name} is ${age} years old and lives in ${city}`);
  };
  extractObject({ name: 'Ashiya', age: 34, city: 'Bangalore' });
  
  //Extract value from nested object
  const obj1 = {
    id: 1,
    info: {
      title: 'JS Basics',
      description: 'Learn Fundamentals',
    },
  };
  const getObjValues = (obj) => {
    const {
      info: { title, description },
    } = obj;
    console.log(title);
    console.log(description);
  };
  getObjValues(obj1);
  