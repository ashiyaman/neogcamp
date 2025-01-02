import Header from '../components/Header.jsx';
import { useParams } from 'react-router-dom';

import Footer from '../components/Footer.jsx';
import { playersData } from './Players.jsx';

const PlayerDetails = () => {
  const playerId = useParams();

  console.log(playersData);

  const selectedPlayer = playersData.find(
    (player) => player.id == playerId.playerId
  );
  console.log(selectedPlayer);
  return (
    <>
      <Header />
      <main className="container my-4">
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
      </main>
      <Footer />
    </>
  );
};

export default PlayerDetails;
