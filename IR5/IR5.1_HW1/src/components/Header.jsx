import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            Company Logo
          </Link>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleElement"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            id="collapsibleElement"
            className="navbar collapse navbar-collapse"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/employees">
                  Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/report">
                  Report
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
