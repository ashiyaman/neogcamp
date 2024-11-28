import { useState } from 'react';

export default function App() {
  const GreetUser = () => {
    const [userName, setUserName] = useState('');
    const inputHandler = (event) => {
      let nameInput = event.target.value;
      setUserName(nameInput);
    };

    return (
      <div>
        <label htmlFor="username">Enter your name:</label>
        <input
          id="username"
          value={userName}
          onChange={(event) => inputHandler(event)}
        />
        {userName && <p>Hello, {userName}!</p>}{' '}
      </div>
    );
  };

  const ValidateEmail = () => {
    const [email, setEmail] = useState('');

    const handleEmailInput = () => {
      setEmail(event.target.value);
    };

    const clickHandler = (event) => {
      const atIndex = email.indexOf('@');
      const dotIndex = email.indexOf('.');
      if (atIndex > 0 && dotIndex > atIndex) {
        alert('Valid Email Address');
      } else {
        alert('Invalid Email Address');
      }
    };

    return (
      <div>
        <label for="emailInput"></label>
        <input id="emailInput" onChange={handleEmailInput} />
        <button onClick={clickHandler}>Validate Email</button>
      </div>
    );
  };

  const CalculateSquare = () => {
    const [numberInput, setNumberInput] = useState();
    const [squareValue, setSquareValue] = useState();

    const handleBtnClick = () => {
      const square = numberInput * numberInput;
      setSquareValue(square);
    };

    return (
      <div>
        <label for="numberInput">Enter a number:</label>
        <input
          id="numberInput"
          onChange={(event) => setNumberInput(event.target.value)}
        />
        <button onClick={handleBtnClick}>Calculate Square</button>
        {squareValue && <p>{squareValue}</p>}
      </div>
    );
  };

  return (
    <main>
      <GreetUser />
      <br />
      <br />
      <ValidateEmail />
      <br />
      <br />
      <CalculateSquare />
    </main>
  );
}
