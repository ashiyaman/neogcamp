import { useState } from 'react';

const FoodSurveyApp = () => {
  const questions = [
    {
      question: 'Which type of cuisine do you prefer?',
      options: {
        Asian: ['Chinese', 'Japanese', 'Indian'],
        European: ['Italian', 'French', 'Spanish'],
        American: ['Burgers', 'Pizza', 'BBQ'],
      },
    },
  ];

  const [continent, setContinent] = useState();
  const [countries, setCountries] = useState([]);
  const [cuisine, setCuisine] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const continentSelectHandler = (event) => {
    const value = event.target.value;
    setContinent(value);
    setCountries(questions[0].options[value]);
  };

  const cuisineHandler = (event) => {
    const value = event.target.value;
    setCuisine([...cuisine, value]);
  };

  return (
    <>
      <h1>Food Survey App</h1>
      {!showFeedback ? (
        <div>
          <label>Select your preferred cuisine: </label>
          <select onChange={continentSelectHandler}>
            <option>--Select Cuisine--</option>
            {Object.keys(questions[0].options).map((cuisineContinenet) => (
              <option value={cuisineContinenet}>{cuisineContinenet}</option>
            ))}
          </select>
          <br />
          <br />
          {countries.length > 0 && (
            <>
              <label>Select Your Preferred Options:</label>
              <br />
              {countries.map((cuisine) => (
                <>
                  <input
                    type="checkbox"
                    value={cuisine}
                    onChange={cuisineHandler}
                  />
                  {cuisine}
                  <br />
                </>
              ))}
            </>
          )}
          <br />
          <br />
          <button onClick={() => setShowFeedback(true)}>Submit</button>
        </div>
      ) : (
        <div>
          <h3>Thank You for Sharing Your Preference!</h3>
          <p>Cuisine: {continent}</p>
          <p>Preferred Options: {cuisine.join(', ')}</p>
        </div>
      )}
    </>
  );
};

const FeedbackForm = () => {
  const [feedbackType, setFeedbackType] = useState();
  const [feedback, setFeedback] = useState();
  const [showFeedback, setShowFeedback] = useState(false);

  const feedbackTypeHandler = (event) => {
    setFeedback('');
    setShowFeedback(false);
    const value = event.target.value;
    setFeedbackType(value);
  };

  return (
    <>
      <h1>Feedback Form</h1>

      <div>
        <label>Select your preferred cuisine: </label>
        <select onChange={feedbackTypeHandler}>
          <option>--Select Feedback Type--</option>
          <option value="Compliment">Compliment</option>
          <option value="Complaint">Complaint</option>
          <option value="Suggestion">Suggestion</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        {feedbackType && (
          <>
            <label>Comments:</label>
            <textarea
              cols="30"
              rows="5"
              value={feedback}
              onChange={(event) => setFeedback(event.target.value)}
            ></textarea>
          </>
        )}
        <br />
        <br />
        <button onClick={() => setShowFeedback(true)}>Submit</button>
      </div>
      {showFeedback && (
        <div>
          <p>{feedbackType}</p>
          <p>{feedback}</p>
        </div>
      )}
    </>
  );
};

export default function App() {
  return (
    <main>
      <FoodSurveyApp />
      <br />
      <br />
      <FeedbackForm />
    </main>
  );
}
