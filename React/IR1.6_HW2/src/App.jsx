const ReverseArray = () => {
  const originalArray = [1, 2, 3, 4, 5];
  const getReversedArray = () => {
    return originalArray.reverse().join(', ');
  };

  return (
    <div>
      <h2>Reverse Array</h2>
      <p>Reversed Array: {getReversedArray()}</p>
    </div>
  );
};

const CalculateBMI = () => {
  const getBMI = (weight, height) => {
    return (weight / height ** 2).toFixed(2);
  };

  return (
    <div>
      <h3>BMI Calculator</h3>
      <p>BMI: {getBMI(70, 1.75)}</p>
    </div>
  );
};

const GenerateQuote = () => {
  const getQuote = () => {
    const quotes = [
      'The only way to do great work is to love what you do. - Steve Jobs',
      'Innovation distinguishes between a leader and a follower. - Steve Jobs',
      "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      'Stay hungry, stay foolish. - Steve Jobs',
      'The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela',
    ];
    return quotes[Math.ceil(Math.random() * (quotes.length - 1 - 0) + 0)];
  };

  return (
    <div>
      <h2>Random Quote</h2>
      <p>{getQuote()}</p>
    </div>
  );
};

const GradeAnalyser = () => {
  const score = 85;
  const displayGrade = (score) => {
    return (
      <>
        {score < 60 ? (
          `<p>Grade: F</p><p>Sorry, you didn't pass. Keep working hard!</p>`
        ) : score < 70 ? (
          <>
            <p>Grade: D</p>
            <p>You passed, but aim higher next time.</p>
          </>
        ) : score < 80 ? (
          <>
            <p>Grade: C</p>
            <p>Not bad, keep it up!</p>
          </>
        ) : score < 90 ? (
          <>
            <p>Grade: B</p>
            <p>Good job!</p>
          </>
        ) : (
          <>
            <p>Grade: A</p>
            <p>Excellent work!</p>
          </>
        )}
      </>
    );
  };

  return (
    <div>
      <h3>Grade Analyzer</h3>
      <p>Score: {score}</p>
      <>{displayGrade(score)}</>
    </div>
  );
};

const TemperatureFeedback = () => {
  const temp = 25;
  const getFeedback = (temp) => {
    return (
      <p>
        {temp < 0
          ? `Brr, it's freezing!`
          : temp < 10
          ? `It's quite cold, bundle up!`
          : temp < 20
          ? `The weather is cool and comfortable.`
          : temp < 30
          ? `It's a warm day!`
          : `It's hot outside, stay cool!`}
      </p>
    );
  };

  return (
    <div>
      <h3>Temperature Feedback</h3>
      <p>Current Temperature: {temp} degree Celcius</p>
      <>{getFeedback(temp)}</>
    </div>
  );
};

export default function App() {
  return (
    <>
      <ReverseArray />
      <CalculateBMI />
      <GenerateQuote />
      <GradeAnalyser />
      <TemperatureFeedback />
    </>
  );
}
