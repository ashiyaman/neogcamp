import { Link } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Players = () => {
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
  return (
    <>
      <Header />
      <main className="container my-4">
        <h1>List of Players</h1>
        <ul className="list-group my-4">
          {playersData.map((player) => (
            <li key={player.id} className="list-group-item">
              <h5>{player.name}</h5>
              <p>{player.position}</p>
              <Link to={`/players/${player.id}`} className="btn btn-primary">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Players;
