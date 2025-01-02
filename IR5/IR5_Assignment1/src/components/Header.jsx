import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand">
            Company Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleElement"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="collapsibleElement" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/players" className="nav-link">
                  Players
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/report" className="nav-link">
                  Report
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
