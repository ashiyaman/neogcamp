import { useState } from 'react';

export default function App() {
  const [preference, setPreference] = useState();
  const [usage, setUsage] = useState();
  const [comment, setComment] = useState();
  const [experience, setExperience] = useState();
  const [isAgree, setIsAgree] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const formHandler = (event) => {
    event.preventDefault();
    if (preference && usage && experience && isAgree) {
      setShowForm(true);
    }
  };

  return (
    <main>
      <h2>Transportation Preference Form</h2>
      <form onSubmit={formHandler}>
        <label>Preferred mode of transportation: </label>
        <select
          onChange={(event) => setPreference(event.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="Car">Car</option>
          <option value="Bus">Bus</option>
          <option value="Train">Train</option>
          <option value="Bicycle">Bicycle</option>
          <option value="Walk">Walk</option>
        </select>
        <br />
        <br />
        <label>Frequency of Usage: </label>
        <select onChange={(event) => setUsage(event.target.value)} required>
          <option value="">Select</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <br />
        <br />
        <label>Comments(if any): </label>
        <br />
        <textarea
          cols="50"
          rows="5"
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <br />
        <br />
        <label>Experience Level: </label>
        <br />
        <input
          type="radio"
          name="experience"
          value="Beginner"
          onChange={(event) => setExperience(event.target.value)}
          required
        />
        Beginner
        <br />
        <input
          type="radio"
          name="experience"
          value="Intermediate"
          onChange={(event) => setExperience(event.target.value)}
          required
        />
        Intermediate
        <br />
        <input
          type="radio"
          name="experience"
          value="Advanced"
          onChange={(event) => setExperience(event.target.value)}
          required
        />
        Advanced
        <br />
        <br />
        <label>
          <input
            type="checkbox"
            value="agree"
            onChange={() => setIsAgree(!isAgree)}
            required
          />
          I agree to the terms and conditions.
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {showForm && (
        <div>
          <h2>Submitted Details:</h2>
          <p>Preferred Mode of Transport: {preference}</p>
          <p>Frequency of Usage: {usage}</p>
          <p>Comments: {comment ? `${comment}` : `none`}</p>
          <p>Experience: {experience}</p>
        </div>
      )}
    </main>
  );
}
