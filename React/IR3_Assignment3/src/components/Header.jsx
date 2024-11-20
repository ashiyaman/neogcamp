import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container">
        <h1 className="fw-normal">My Social Media</h1>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
