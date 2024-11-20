const RandomNumber = () => {
  return <p>Random Number: {Math.ceil(Math.random() * (100 - 0) + 0)}</p>;
};

const AbsoluteValue = () => {
  const number = -10;
  return <p>Absolute number: {Math.abs(number)}</p>;
};

const SumOfEvenNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  return (
    <p>
      Sum of Even numbers:{' '}
      {numbers.reduce((acc, curr) => (curr % 2 === 0 ? acc + curr : acc), 0)}
    </p>
  );
};

const PerimeterSquare = () => {
  const side = 5;
  return (
    <div>
      <h1>Square Perimeter Calculator</h1>
      <p>Side Length: {side} cm</p>
      <p>Perimeter: {4 * side} cm</p>
    </div>
  );
};

const CurrencyConverter = () => {
  const amount = 50;
  const exchangeRate = 74.5;
  return (
    <div>
      <h1>Currency Converter</h1>
      <p>Amount in USD: ${amount}</p>
      <p>Exchange Rate: 1USD = {exchangeRate} INR</p>
      <p>Amount in INR: INR {amount * exchangeRate}</p>
    </div>
  );
};

export default function App() {
  return (
    <>
      <RandomNumber />
      <AbsoluteValue />
      <SumOfEvenNumbers />
      <PerimeterSquare />
      <CurrencyConverter />
    </>
  );
}
