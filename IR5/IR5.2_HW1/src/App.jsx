import { useState } from 'react';

import useFetch from './useFetch.jsx';

const App = () => {
  const [showData, setShowData] = useState(false);
  const { data } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(data);
  return (
    <div>
      <h1>Todo API</h1>
      <button onClick={() => setShowData(true)}>Get Data</button>
      {showData && (
        <div>
          {data ? (
            <p>{JSON.stringify(data)}</p>
          ) : (
            <p>Ann error occured while fetching todo.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
