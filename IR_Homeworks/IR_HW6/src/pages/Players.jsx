import { Link } from 'react-router-dom';

import Header from '../components/Header.jsx';

const Players = () => {
  const playersData = [
    {
      id: 1,
      name: 'Player 1',
      country: 'India',
      role: 'Batsman',
    },
    {
      id: 2,
      name: 'Player 2',
      country: 'Australia',
      role: 'Bowler',
    },
  ];
  return (
    <>
      <Header />
      <main className="container my-4">
        <h1>List of Cricket Players</h1>

        {playersData.map((player) => (
          <div key={player.id} className="row">
            <div className="col-md-8 my-2">
              <div className="card">
                <div className="card-header">
                  <h4>{player.name}</h4>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <strong>Country: </strong>
                    {player.country}
                  </p>
                  <p className="card-text">
                    <strong>Role: </strong>
                    {player.role}
                  </p>
                  <Link
                    to={`/players/${player.id}`}
                    className="btn btn-primary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Players;
