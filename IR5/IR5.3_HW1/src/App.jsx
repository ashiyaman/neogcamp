import useFetch from './useFetch.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=4'
  );
  return (
    <div className="container">
      <h1 className="my-4">Todo Lists</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-center">{error}</p>}
      {data && data.length > 0 ? (
        <ul className="list-group">
          {data.map((todo) => (
            <li key={todo.id} className="list-group-item">
              <p>
                <strong>{todo.title}</strong>
              </p>
              <p>{todo.completed ? `Completed` : `Not Completed`}</p>
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
