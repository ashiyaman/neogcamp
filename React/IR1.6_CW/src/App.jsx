const MathOperations = () => {
  const a = 20;
  const b = 6;

  const getSum = (x, y) => {
    return x + y;
  };

  const getDifference = (x, y) => {
    return x - y;
  };

  return (
    <div>
      <p>
        {a} + {b} equals {getSum(a, b)}
      </p>
      <p>
        {a} - {b} equals {getDifference(a, b)}
      </p>
    </div>
  );
};

const CallGreetingFunction = () => {
  const getGreeting = () => {
    return `Hello World!`;
  };

  return <h1>{getGreeting()}</h1>;
};

const GetFormattedDate = () => {
  const getCurrentDate = () => {
    return new Date().toDateString();
  };

  return <p>Current Date: {getCurrentDate()}</p>;
};

export default function App() {
  return (
    <>
      <MathOperations />
      <CallGreetingFunction />
      <GetFormattedDate />
    </>
  );
}
