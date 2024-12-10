import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-dark text-light">
      <div className="container py-4">
        <h1 className="fw-normal">Taj Mahal</h1>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/history">
              History
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/architecture">
              Architecture
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
