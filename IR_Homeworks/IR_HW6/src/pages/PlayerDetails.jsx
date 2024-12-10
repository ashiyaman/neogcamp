import { useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';

const PlayerDetails = () => {
  const playerId = useParams();

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

  const selectedPlayer = playersData.find(
    (player) => player.id == playerId.playerId
  );

  return (
    <>
      <Header />
      <main className="container my-4">
        <h2>Player Details</h2>
        {selectedPlayer && (
          <>
            <div className="card">
              <div className="card-header">
                <h5>{selectedPlayer.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  <strong>Country: </strong>
                  {selectedPlayer.country}
                </p>
                <p className="card-text">
                  <strong>Role: </strong>
                  {selectedPlayer.role}
                </p>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default PlayerDetails;
