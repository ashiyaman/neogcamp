import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './useFetch.jsx';

const App = () => {
  const { data, loading, error, fetchData } = useFetch(
    'https://randomuser.me/api/'
  );

  console.log(data);

  return (
    <div className="container">
      <h1 className="my-3">Random User API</h1>
      <button onClick={fetchData} className="btn btn-info">
        <strong>Get random User</strong>
      </button>
      <div className="my-3">
        {loading && <p>Loading...</p>}
        {error && <p>An error occured while fetching posts.</p>}
        {data && (
          <div>
            <p>
              <strong>Name: </strong>
              {data.results[0].name.first} {data.results[0].name.last}
            </p>
            <p>
              <strong>Email: </strong>
              {data.results[0].email}
            </p>
            <p>
              <strong>City: </strong>
              {data.results[0].location.city}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
