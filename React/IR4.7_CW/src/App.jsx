import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState([]);
  const [color, setColor] = useState('');
  const [formData, setFormData] = useState(false);

  const formHandler = (event) => {
    event.preventDefault();
    console.log(name, address, gender, interests, color);
    if (name && address && gender && interests && color) {
      setFormData(true);
    }
  };

  const interestHandler = (event) => {
    let value = event.target.value;
    if (value) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest != value));
    }
  };
  return (
    <main>
      <h1>User Profile Form</h1>
      <form onSubmit={formHandler}>
        <label>Name: </label>
        <br />
        <input onChange={(event) => setName(event.target.value)} />
        <br />
        <br />
        <label>Address: </label>
        <br />
        <textarea
          rows="4"
          cols="44"
          onChange={() => setAddress(event.target.value)}
        ></textarea>
        <br />
        <br />
        <label>Gender: </label>
        <br />
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={(event) => setGender(event.target.value)}
        />
        Female
        <br />
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={(event) => setGender(event.target.value)}
        />
        Male
        <br />
        <input
          type="radio"
          name="gender"
          value="Others"
          onChange={(event) => setGender(event.target.value)}
        />
        Others
        <br />
        <br />
        <label>Interests: </label>
        <br />
        <input
          type="checkbox"
          name=""
          value="Reading"
          onChange={interestHandler}
        />
        Reading
        <input
          type="checkbox"
          name=""
          value="Singing"
          onChange={interestHandler}
        />
        Singing
        <input
          type="checkbox"
          name=""
          value="Painting"
          onChange={interestHandler}
        />
        Painting
        <br />
        <br />
        <label>Favorite Color: </label>
        <select onChange={(event) => setColor(event.target.value)}>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Orange">Orange</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      {formData && (
        <div>
          <h2>Submitted Details</h2>
          <p>Name: {name}</p>
          <p>Address: {address}</p>
          <p>Gender: {gender}</p>
          <p>Interests: {interests.join(', ')}</p>
          <p>Favorite Color: {color}</p>
        </div>
      )}
    </main>
  );
}
