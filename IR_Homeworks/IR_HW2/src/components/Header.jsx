import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-dark text-light">
      <div className="container py-4">
        <h1 className="fw-normal">Virat Kohli</h1>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Overview
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/biography">
              Biography
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/records">
              Records
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
