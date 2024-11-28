import { useState } from 'react';

const ValidateZipcode = () => {
  const [zipcode, setZipcode] = useState();
  const clickHandler = () => {
    if (zipcode.length !== 5) {
      alert('Invalid Zipcode! Please enter 5-digit number.');
    } else {
      alert('Valid Zipcode!');
    }
  };
  return (
    <div>
      <label>Enter your zipcode: </label>
      <input
        type="number"
        onChange={(event) => setZipcode(event.target.value)}
      />
      <button onClick={clickHandler}>Validate Zipcode</button>
    </div>
  );
};

const CapitalizeName = () => {
  const [name, setName] = useState('');

  const clickHandler = () => {
    const capitalizedName = name
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1, word.length))
      .join(' ');
    alert(`Capitalized Full Name: ${capitalizedName}`);
  };

  return (
    <div>
      <label>Enter your full name: </label>
      <input onChange={(event) => setName(event.target.value)} />
      <button onClick={clickHandler}>Capilize Name</button>
    </div>
  );
};

const ResetSearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const clickHandler = () => {
    setSearchTerm('');
  };

  return (
    <div>
      <label>Enter search term: </label>
      <input
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
      />
      <button onClick={clickHandler}>Reset Search Term</button>
      {searchTerm !== '' && <p>{searchTerm}</p>}
    </div>
  );
};

const ResetAddress = () => {
  const [address, setAddress] = useState('');

  const clickHandler = () => {
    setAddress('');
  };

  return (
    <div>
      <label>Enter your address: </label>
      <input
        onChange={(event) => setAddress(event.target.value)}
        value={address}
      />
      <button onClick={clickHandler}>Reset Address</button>
      {address !== '' && <p>{address}</p>}
    </div>
  );
};

const ClearMessage = () => {
  const [message, setMessage] = useState('');

  return (
    <div>
      <label>Enter a message: </label>
      <input
        onChange={(event) => setMessage(event.target.value)}
        value={message}
      />
      <button onClick={() => setMessage('')}>Clear Message</button>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <ValidateZipcode />
      <br />
      <br />
      <CapitalizeName />
      <br />
      <br />
      <ResetSearchTerm />
      <br />
      <br />
      <ResetAddress />
      <br />
      <br />
      <ClearMessage />
    </div>
  );
}
