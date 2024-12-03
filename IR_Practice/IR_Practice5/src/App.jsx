import { useState } from 'react';

const TravelDestination = () => {
  const questions = {
    question: 'Select Your Preferred Continent:',
    options: {
      Asia: ['Japan', 'Thailand', 'India'],
      Europe: ['France', 'Italy', 'Spain'],
      'North America': ['USA', 'Canada', 'Mexico'],
    },
  };

  const [continent, setContinent] = useState();
  const [countries, setCountries] = useState([]);
  const [destination, setDestination] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const countriesHandler = (event) => {
    const value = event.target.value;
    setContinent(value);
    setCountries(questions.options[value]);
  };

  const destinationHandler = (event) => {
    setDestination(event.target.value);
  };

  return (
    <div>
      <h2>Travel Destination App</h2>
      {!showFeedback ? (
        <div>
          <label>{questions.question}: </label>
          <select onChange={countriesHandler}>
            <option>--Select Continent--</option>
            {Object.keys(questions.options).map((continent) => (
              <option key={continent} value={continent} name={continent}>
                {continent}
              </option>
            ))}
          </select>
          <br />
          <br />
          {countries.length > 0 && (
            <>
              <label>Select Your Preferred Destination: </label>
              <br />
              {countries.map((country) => (
                <div key={country}>
                  <input
                    type="radio"
                    value={country}
                    name={countries}
                    onChange={destinationHandler}
                  />
                  {country}
                </div>
              ))}
              <br />
              <br />
            </>
          )}
          <button onClick={() => setShowFeedback(true)}>Submit</button>
        </div>
      ) : (
        <div>
          <h3>Thank You for Sharing Your Preference!</h3>
          <p>Preferred Continent: {continent}</p>
          <p>Preferred Destination: {destination}</p>
        </div>
      )}
    </div>
  );
};

const MusicPreferenceApp = () => {
  const questions = {
    question: 'Which type of music do you prefer?',
    options: {
      Rock: ['Classic Rock', 'Alternative Rock', 'Indie Rock'],
      Pop: ['Pop Rock', 'Synth-pop', 'Electropop'],
      'Hip Hop': ['East Coast Hip Hop', 'West Coast Hip Hop', 'Trap Music'],
    },
  };

  const [showResponse, setShowResponse] = useState(false);
  const [genre, setGenre] = useState('');
  const [subGenres, setSubGenres] = useState([]);
  const [selectedSubGenre, setSelectedSubGenre] = useState('');

  const genreHandler = (event) => {
    const value = event.target.value;
    setGenre(value);
    setSubGenres(questions.options[value]);
  };

  return (
    <>
      <h2>Movie Preference App</h2>
      {!showResponse ? (
        <div>
          <label>Select Your Preferred Music Genre: </label>
          <select onChange={genreHandler}>
            <option>--Select Genre--</option>
            {Object.keys(questions.options).map((genre) => (
              <option value={genre} key={genre}>
                {genre}
              </option>
            ))}
          </select>
          <br />
          <br />
          {subGenres.length > 0 && (
            <div>
              <label>Select Your Preferred Subgenres: </label>
              <br />
              {subGenres.map((subGenre) => (
                <div key={subGenre}>
                  <input
                    type="radio"
                    value={subGenre}
                    onChange={(event) =>
                      setSelectedSubGenre(event.target.value)
                    }
                  />
                  {subGenre}
                  <br />
                </div>
              ))}
            </div>
          )}
          <br />
          <button onClick={() => setShowResponse(true)}>Submit</button>
        </div>
      ) : (
        <div>
          <h3>Thank You for Sharing Your Preferences!</h3>
          <p>Selected Genre: {genre}</p>
          <p>Selected Sub Genre: {selectedSubGenre}</p>
        </div>
      )}
    </>
  );
};

export default function App() {
  return (
    <main>
      <TravelDestination />
      <MusicPreferenceApp />
    </main>
  );
}
