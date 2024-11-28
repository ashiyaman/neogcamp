import { useState } from 'react';

export default function App() {
  const ValidatePhoneNumber = () => {
    const [phonenNumber, setPhoneNumber] = useState();

    const clickHandler = () => {
      if (phonenNumber.length !== 10) {
        alert('Invalid Phone Number! Please enter a 10-digit Number.');
      } else {
        alert('Valid Phone Number!');
      }
    };
    return (
      <div>
        <label for="phoneNumber">Enter your Phone Number:</label>
        <input
          type="number"
          id="phoneNumber"
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <button onClick={clickHandler}>Validate Phone Number</button>
      </div>
    );
  };

  const ValidatePassword = () => {
    const [password, setPassword] = useState();

    const clickHandler = () => {
      if (password.length < 8) {
        alert('Password Strength: Weak');
      } else {
        alert('Password Strength: Strong');
      }
    };
    return (
      <div>
        <label for="password">Enter your password:</label>
        <input
          id="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={clickHandler}>Validate Password</button>
      </div>
    );
  };

  const CalculateAge = () => {
    const [age, setAge] = useState(0);

    const clickHandler = () => {
      const calculatedAge =
        new Date().getFullYear() - new Date(age).getFullYear();

      alert(`Your are ${calculatedAge} years old.`);
    };

    return (
      <div>
        <label for="birthdate">Enter you Birthdate:</label>
        <input
          type="date"
          id="birthdate"
          onChange={(event) => setAge(event.target.value)}
        />
        <button onClick={clickHandler}>Calculate Age</button>
      </div>
    );
  };

  const FavoriteColor = () => {
    const [color, setColor] = useState('');
    const [showColor, setShowColor] = useState(false);

    const clickHandler = () => {
      setShowColor(true);
    };
    return (
      <div>
        <label for="color">Enter your favorite color:</label>
        <input id="color" onChange={(event) => setColor(event.target.value)} />
        <button onClick={clickHandler}>Display Color</button>
        {showColor && <p>Your favorite color is {color}.</p>}
      </div>
    );
  };

  const SearchQuery = () => {
    const [query, setQuery] = useState('');
    const [showQuery, setShowQuery] = useState(false);

    const clickHandler = () => {
      setShowQuery(true);
    };

    return (
      <div>
        <label for="query">Enter your search query:</label>
        <input id="query" onChange={() => setQuery(event.target.value)} />
        <button onClick={clickHandler}>Search</button>
        {showQuery && <p>Searching for: {query}</p>}
      </div>
    );
  };

  return (
    <main>
      <ValidatePhoneNumber />
      <br />
      <br />
      <ValidatePassword />
      <br />
      <br />
      <CalculateAge />
      <br />
      <br />
      <FavoriteColor />
      <br />
      <br />
      <SearchQuery />
    </main>
  );
}
