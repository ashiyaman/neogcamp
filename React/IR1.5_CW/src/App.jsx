const Addition = () => {
  const a = 2;
  const b = 3;
  return (
    <p>
      The result of {a} + {b} is {a + b}.
    </p>
  );
};

const TemperatureCalculator = () => {
  const celcius = 30;
  const farenheit = (celcius * 9) / 5 + 32;
  return (
    <p>
      {celcius} degree celcius is equal to {farenheit} Farenheit.
    </p>
  );
};

const CombinedOperations = () => {
  const a = 15;
  const b = 5;
  const c = 3;
  return (
    <div>
      <p>
        {a} + {b} + {c} equals {a + b + c}
      </p>
      <p>
        {a} - {b} equals {a - b}
      </p>
      <p>
        {a} * {b} equals {a * b}
      </p>
    </div>
  );
};

const Welcome = () => {
  const firstName = `Ashiya`;
  const lastName = `Amanulla`;
  return <p>{`Welcome, ${firstName} ${lastName}`}</p>;
};

export default function App() {
  return (
    <div>
      <Addition />
      <TemperatureCalculator />
      <CombinedOperations />
      <Welcome />
    </div>
  );
}
