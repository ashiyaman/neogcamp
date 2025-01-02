import useFetch from './useFetch.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  console.log(data);
  return (
    <div className="container">
      <h1 className="my-4">Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-center">{error}</p>}
      {data && data.length > 0 ? (
        <ul className="list-group">
          {data.map((post) => (
            <li key={post.id} className="list-group-item">
              <p>
                <strong>{post.title}</strong>
              </p>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>An error occured while fetching todos.</p>
      )}
    </div>
  );
};

export default App;
