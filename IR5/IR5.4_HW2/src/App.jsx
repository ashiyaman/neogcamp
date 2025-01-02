import 'bootstrap/dist/css/bootstrap.min.css';

import useFetch from './useFetch.jsx';

const App = () => {
  const { data, loading, error, fetchData } = useFetch(
    'https://api.adviceslip.com/advice'
  );
  return (
    <div className="container text-center">
      <h1 className="my-3">Advice Slip API</h1>
      <button onClick={fetchData} className="btn btn-primary">
        Get Advice
      </button>
      <div className="my-3">
        {loading && <p>Loading...</p>}
        {error && <p>An error occured while fetching advice slip from API.</p>}
        {data && (
          <p>
            <strong>{data.slip.advice}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
