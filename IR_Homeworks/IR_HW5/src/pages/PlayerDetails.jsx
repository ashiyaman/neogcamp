import { useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const PlayerDetails = () => {
  const playerId = useParams();

  const playersData = [
    {
      id: 1,
      name: 'Lionel Messi',
      position: 'Forward',
      team: 'Barcelona-FC',
    },
    {
      id: 2,
      name: 'Christiano ronaldo',
      position: 'Forward',
      team: 'Manchester United',
    },
    {
      id: 3,
      name: 'Neymar JR',
      position: 'Forward',
      team: 'Paris Saint-German',
    },
  ];

  const selectedPlayer = playersData.find(
    (player) => player.id == playerId.playerId
  );

  return (
    <>
      <Header />
      <main className="container my-4">
        {selectedPlayer && (
          <>
            <h2>{selectedPlayer.name}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Name: </strong>
                {selectedPlayer.name}
              </li>
              <li className="list-group-item">
                <strong>Position: </strong>
                {selectedPlayer.position}
              </li>
              <li className="list-group-item">
                <strong>Team: </strong>
                {selectedPlayer.team}
              </li>
            </ul>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default PlayerDetails;
