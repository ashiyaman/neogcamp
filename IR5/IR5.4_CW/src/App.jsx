import useFetch from './useFetch.jsx';

const App = () => {
  const { data, loading, error, fetchData } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return (
    <div>
      <h1>Fetch Data on Button Click</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>An error occured while fetching posts.</p>}
        {data && data.length > 0 && (
          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
