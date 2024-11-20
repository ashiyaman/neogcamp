import { useState } from 'react';

function ChangeCount() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <hr />
    </div>
  );
}

function ToggleBackground() {
  const [background, setBackground] = useState('lightblue');
  return (
    <div>
      <button
        style={{ backgroundColor: `${background}` }}
        onClick={() =>
          background === 'lightblue'
            ? setBackground('gray')
            : setBackground('lightblue')
        }
      >
        Toggle Background
      </button>
      <hr />
    </div>
  );
}

function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(true);
  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? 'Hide' : 'Show'} Message
      </button>
      <p style={{ display: showMessage ? 'block' : 'none' }}>
        This is a toggleable message!
      </p>
      <hr />
    </div>
  );
}

function ChangeTextColor() {
  const [textColor, setTextColor] = useState('red');
  return (
    <div>
      <p style={{ color: textColor }}>Text color toggler</p>
      <button
        onClick={() =>
          textColor === 'red' ? setTextColor('green') : setTextColor('red')
        }
      >
        Toggle Color
      </button>
      <hr />
    </div>
  );
}

function SelectFruit() {
  const [selectedFruit, setSelectedFruit] = useState('');
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
  return (
    <div>
      <h2>Select a Fruit</h2>
      <ul>
        {fruits.map((fruit) => (
          <li
            key={fruit}
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedFruit(fruit)}
          >
            {fruit}
          </li>
        ))}
      </ul>
      <p>You selected {selectedFruit}</p>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <ChangeCount />
      <ToggleBackground />
      <ToggleMessage />
      <ChangeTextColor />
      <SelectFruit />
    </main>
  );
}
