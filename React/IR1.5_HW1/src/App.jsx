const ArrayOperations = () => {
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / numbers.length;
  const maxNum = numbers.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  }, numbers[0]);
  const minNum = numbers.reduce((acc, curr) => {
    return acc < curr ? acc : curr;
  }, numbers[0]);

  return (
    <div>
      <h2>Array Operations</h2>
      <p>Sum: {sum}</p>
      <p>Average: {avg}</p>
      <p>Maximum: {maxNum}</p>
      <p>Minimum: {minNum}</p>
    </div>
  );
};

const ObjectManipulation = () => {
  const person = {
    name: 'Sarah',
    age: 28,
    city: 'New York',
  };
  const updatedPerson = { ...person, age: person.age + 1 };
  return (
    <div>
      <h2>Personal Details</h2>
      <p>Name: {updatedPerson.name}</p>
      <p>Age: {updatedPerson.age}</p>
      <p>City: {updatedPerson.city}</p>
    </div>
  );
};

const SquareArea = () => {
  const sides = 5;
  return (
    <div>
      <h2>Area of Square</h2>
      <p>The area of Square: {sides ** 2}</p>
    </div>
  );
};

const CapitalizeString = () => {
  const str = `hello world`;
  return (
    <div>
      <h2>Capitalize Text</h2>
      <p>{str.toUpperCase()}</p>
    </div>
  );
};

const CircleArea = () => {
  const radius = 8;
  return (
    <div>
      <h2>Area of Circle</h2>
      <p>The area of circle: {(Math.PI * radius ** 2).toFixed(2)}</p>
    </div>
  );
};

export default function App() {
  return (
    <>
      <ArrayOperations />
      <ObjectManipulation />
      <SquareArea />
      <CapitalizeString />
      <CircleArea />
    </>
  );
}
