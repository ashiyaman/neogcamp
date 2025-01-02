import { useState } from 'react';

import useFetch from './useFetch.jsx';

const App = () => {
  const [showJoke, setShowJoke] = useState(false);
  const jokeData = useFetch(
    'https://v2.jokeapi.dev/joke/Programming?type=single'
  );
  //console.log(jokeData.data.joke);
  return (
    <div>
      <h1>Programming API</h1>
      <button onClick={() => setShowJoke(true)}>Get Programming Joke</button>
      {showJoke && (
        <div>
          {jokeData ? (
            <p>{jokeData.data.joke}</p>
          ) : (
            <p>An error occurred while fetching programming joke.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
