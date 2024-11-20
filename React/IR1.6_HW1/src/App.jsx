const GenerateGreeting = () => {
  const getGreeting = (name) => {
    return `Hello ${name}!`;
  };

  return <h1>{getGreeting('John')}</h1>;
};

const CalculateArea = () => {
  const getArea = (length, width) => {
    return length * width;
  };

  return <p>Rectangle Area: {getArea(10, 5)}</p>;
};

const CalculatePerimeter = () => {
  const getPerimeter = (length, width) => {
    return 2 * (length + width);
  };

  return <p>Rectangle Perimeter: {getPerimeter(10, 5)}</p>;
};

const GenerateMessage = () => {
  const getHours = () => {
    return new Date().getHours();
  };

  return (
    <h1>
      {getHours() < 12
        ? `Good Morning!`
        : getHours() < 18
        ? `Good Afternoon!`
        : `Good Evening!`}
    </h1>
  );
};

const CalculateVolume = () => {
  const getVolume = (radius, height) => {
    return Math.PI * radius ** 2 * height;
  };

  return <p>Volume of Cylinder: {getVolume(3, 5)}</p>;
};

export default function App() {
  return (
    <>
      <GenerateGreeting />
      <CalculateArea />
      <CalculatePerimeter />
      <GenerateMessage />
      <CalculateVolume />
    </>
  );
}
