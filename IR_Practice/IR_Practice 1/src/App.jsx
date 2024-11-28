import { useState } from 'react';

const PositiveNegative = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Positive and Negative</h2>
      <p>Count : {count}</p>
      <p>The count is {count < 0 ? `negative` : `positive`}.</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

const UserLogin = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const loginhandler = (event) => {
    if (name && password) {
      setLogin(true);
    }
  };
  return (
    <>
      <h2>User Login</h2>
      {!login && (
        <div>
          <label>Username: </label>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <br />
          <label> Password: </label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <br />
          <button onClick={loginhandler}>Login</button>
        </div>
      )}
      {login && (
        <div>
          <h1>Welcome, {name}!</h1>
        </div>
      )}
    </>
  );
};

const TemperatureConverter = () => {
  const [farenheit, setFarenheit] = useState(32);
  const [celcius, setCelcius] = useState(0);

  const celciusHandler = (event) => {
    const value = event.target.value;
    setCelcius(value);
    setFarenheit(value * (9 / 5) + 32);
  };

  const farenheitHandler = (event) => {
    const value = event.target.value;
    setFarenheit(value);
    setCelcius(((value - 32) * 5) / 9);
  };
  return (
    <>
      <h2>Temperature Converter</h2>
      <label>Celcius: </label>
      <input type="number" onChange={celciusHandler} value={celcius} />
      <br />
      <br />
      <label>Farenheit: </label>
      <input type="number" onChange={farenheitHandler} value={farenheit} />
      <br />
    </>
  );
};

const ShoppingCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [listItems, setListItems] = useState([]);

  const cartHandler = (name, price) => {
    const updatedList = [...listItems, { name: `${name}`, price: `${price}` }];
    setListItems(updatedList);
    setTotalPrice(totalPrice + price);
  };

  return (
    <>
      <h2>Shopping Cart</h2>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <p>Total price: ${totalPrice}</p>
      <button onClick={() => cartHandler('Product A', 10)}>
        Add Product A
      </button>
      <button onClick={() => cartHandler('Product B', 20)}>
        Add Product B
      </button>
    </>
  );
};

const QuizApp = () => {
  const questions = [
    'What is the national bird of India?',
    'How many colors are there in Indian flag?',
    'What is the color of sky?',
  ];
  const [count, setCount] = useState(0);
  const [text, setText] = useState();
  const [showQuestions, setShowQuestions] = useState(true);

  const quizHandler = () => {
    console.log('here....', count);
    if (text) {
      count === questions.length - 1
        ? setShowQuestions(false)
        : setCount(count + 1);
    } else {
      alert('Please answer the question.');
    }
  };

  return (
    <>
      <h2>Quiz App</h2>
      {showQuestions ? (
        <div>
          <p>{questions[count]}</p>
          <input
            type="text"
            required
            onChange={(event) => setText(event.target.value)}
          />
          <button onClick={quizHandler}>Next</button>
        </div>
      ) : (
        <p>You answered all questions!</p>
      )}
      <br />
      <br />
    </>
  );
};

export default function App() {
  return (
    <main>
      <PositiveNegative />
      <UserLogin />
      <TemperatureConverter />
      <ShoppingCart />
      <QuizApp />
    </main>
  );
}
