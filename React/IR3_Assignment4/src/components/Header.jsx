import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="bg-dark text-light">
        <div className="container py-4">
          <h1 className="fw-normal">Todos</h1>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todos" className="nav-link">
                Todos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
