import useFetch from './useFetch.jsx';

const App = () => {
  const { data, loading, error } = useFetch(
    'https://randomuser.me/api/?results=3'
  );

  return (
    <div>
      <h1>Random Users</h1>
      <div>
        {loading && <p>Loading....</p>}
        {error && <p>An error occured while fetching users.</p>}
        {data && data.results && data.results.length > 0 ? (
          data.results.map((user) => (
            <div>
              <img src={user.picture.medium} alt="User Image" />
              <p>
                Name: {user.name.first} {user.name.last}
              </p>
              <p>Email: {user.email}</p>
              <p>City: {user.location.city}</p>
            </div>
          ))
        ) : (
          <p>Not</p>
        )}
      </div>
    </div>
  );
};

export default App;
