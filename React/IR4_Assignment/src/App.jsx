import { useState } from 'react';

export default function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [plan, setPlan] = useState();
  const [interests, setInterests] = useState([]);
  const [isToReceiveUpdates, setIsToReceiveUpdates] = useState();
  const [comments, setComments] = useState();
  const [showDetails, setShowDetails] = useState(false);

  const interestsHandler = (event) => {
    let value = event.target.value;
    if (value) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest !== value));
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (name && email && plan && interests && isToReceiveUpdates) {
      setShowDetails(true);
    } else {
      alert('Please fill necessary details.');
    }
  };

  return (
    <main>
      <h1>Subscription Form</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="name">Full Name: </label>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="plan">Subscription Plan: </label>
        <select
          id="plan"
          onChange={(event) => setPlan(event.target.value)}
          required
        >
          <option
            value="Select Plan"
            style={{ backgroundColor: 'black', opacity: '0.5', color: 'white' }}
          >
            Select Plan
          </option>
          <option
            value="basic"
            style={{ backgroundColor: 'black', opacity: '0.5', color: 'white' }}
          >
            Basic
          </option>
          <option
            value="premium"
            style={{ backgroundColor: 'black', opacity: '0.5', color: 'white' }}
          >
            Premium
          </option>
          <option
            value="ultimate"
            style={{ backgroundColor: 'black', opacity: '0.5', color: 'white' }}
          >
            Ultimate
          </option>
        </select>
        <br />
        <br />
        <label htmlFor="interests">Interests: </label>
        <br />
        <input type="checkbox" value="Technology" onChange={interestsHandler} />
        Technology
        <br />
        <input type="checkbox" value="Fitness" onChange={interestsHandler} />
        Fitness
        <br />
        <input type="checkbox" value="Cooking" onChange={interestsHandler} />
        Cooking
        <br />
        <br />
        <label htmlFor="receiveUpdates">Want to Receive Updates: </label>
        <br />
        <input
          type="radio"
          value="yes"
          name="updates"
          onChange={(event) => setIsToReceiveUpdates(event.target.value)}
        />
        Yes
        <br />
        <input
          type="radio"
          value="no"
          name="updates"
          onChange={(event) => setIsToReceiveUpdates(event.target.value)}
        />
        No
        <br />
        <br />
        <label htmlFor="comments">Comments: </label>
        <br />
        <textarea
          id="comments"
          cols="50"
          rows="5"
          onChange={(event) => setComments(event.target.value)}
        ></textarea>
        <br />
        <br />
        <button type="submit">Subscribe</button>
      </form>

      {showDetails && (
        <div>
          <p>Full Name: {name}</p>
          <p>Email: {email}</p>
          <p>Subscription Plan: {plan}</p>
          <p>Interests: {interests.join(', ')}</p>
          <p>Want to receive updates: {isToReceiveUpdates}</p>
          {<p>Comments: {comments ? `${comments}` : `none`}</p>}
        </div>
      )}
    </main>
  );
}
