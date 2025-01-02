import 'bootstrap/dist/css/bootstrap.min.css';

import useFetch from './useFetch.jsx';
import { useState } from 'react';

const App = () => {
  const { data, loading, error, fetchData } = useFetch(
    'https://randomuser.me/api/?results=3'
  );
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="container">
      <h1 className="my-3">People Directory</h1>
      <button className="btn btn-primary" onClick={fetchData}>
        Get People
      </button>
      <div className="my-3">
        {loading && <p>Loading...</p>}
        {error && <p>An error occured while fetching users.</p>}
        {data && data.results.length > 0 && (
          <>
            <div className="row my-3">
              {data.results.map((user, index) => (
                <div key={index} className="col-md-4 my-2">
                  <div className="card">
                    <img
                      className="card-img-top img-fluid"
                      src={user.picture.large}
                      alt={`user ${user.id}`}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {user.name.first} {user.name.last}
                      </h5>
                      <p className="card-text">Age: {user.dob.age}</p>
                      <p className="card-text">Gender: {user.gender}</p>
                      <p className="card-text">
                        Username: {user.login.username}
                      </p>
                      <p className="card-text">Email: {user.email}</p>
                      {showDetails && (
                        <>
                          <p className="card-text">
                            Phone Number: {user.phone}
                          </p>
                          <p>
                            Full Address: {user.location.street.number},{' '}
                            {user.location.street.name}, {user.location.city},{' '}
                            {user.location.state}, {user.location.country},{' '}
                            {user.location.postcode}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                className="btn btn-primary"
                style={{ width: '50%' }}
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? `Show Less Info` : `Show More Info`}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
