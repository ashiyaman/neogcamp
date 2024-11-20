import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container py-3">
        <h1>My vacation Stays Website</h1>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Overview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/stays">
              Stays
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
