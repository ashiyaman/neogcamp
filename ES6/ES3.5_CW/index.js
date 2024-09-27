//Function to rename parameters of an object using restructuring
const printPersonDetails = ({ name: personName, age: personAge }) => {
    console.log(`Person: ${personName}, Age: ${personAge}`);
  };
  printPersonDetails({ name: 'Ashiya', age: 35 });
  
  //Function to rename properties of array
  const printfruits = ([fruitName, fruitColor]) => {
    console.log(`Fruit: ${fruitName} is ${fruitColor} in color.`);
  };
  printfruits(['Apple', 'red']);
  
  //Function to print book details using restructuring
  const getBookDetails = ({
    title: bookTitle,
    author: { authorName, nationality },
  }) => {
    console.log(
      `Book: ${bookTitle}, Author: ${authorName}, Nationality: ${nationality} `
    );
  };
  getBookDetails({
    title: 'JS Basics',
    author: { name: 'John Doe', nationality: 'American' },
  });
  
  const displayPerson = ({ name: personName = 'Alice', age: personAge = 28 }) => {
    console.log(`Person Name: ${personName}, Person Age: ${personAge}`);
  };
  displayPerson({});
  