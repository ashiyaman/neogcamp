import { Link } from 'react-router-dom';
import { useState } from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export const playersData = [
  { id: 1, name: 'Lionel Messi', position: 'Forward', team: 'Barcelona' },
  {
    id: 2,
    name: 'Cristiano Ronaldo',
    position: 'Forward',
    team: 'Manchester United',
  },
  {
    id: 3,
    name: 'Neymar Jr',
    position: 'Forward',
    team: 'Paris Saint-Germain',
  },
  {
    id: 4,
    name: 'Kylian Mbappé',
    position: 'Forward',
    team: 'Paris Saint-Germain',
  },
  {
    id: 5,
    name: 'Robert Lewandowski',
    position: 'Forward',
    team: 'Bayern Munich',
  },
];

const Players = () => {
  const [teamFilter, setTeamFilter] = useState('All Teams');

  const filteredPlayers =
    teamFilter === 'All Teams'
      ? playersData
      : playersData.filter((player) => player.team === teamFilter);

  return (
    <>
      <Header />
      <main className="container my-4">
        <h1>List Of Players</h1>
        <div className="my-3">
          <label>Filter By Team:</label>
          <br />
          <select
            className="form-control"
            onChange={(e) => setTeamFilter(e.target.value)}
          >
            <option value="All Teams">All Teams</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Manchester United">Manchester United</option>
            <option value="Paris Saint-Germain">Paris Saint-Germain</option>
            <option value="Bayern Munich">Bayern Munich</option>
          </select>
        </div>
        <ul className="list-group">
          {filteredPlayers.map((player) => (
            <li key={player.id} className="list-group-item ">
              <h5>{player.name}</h5>
              <p>Position: {player.position}</p>
              <p>Team: {player.team}</p>
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
