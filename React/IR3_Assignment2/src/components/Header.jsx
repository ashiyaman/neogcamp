import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container py-3">
        <h1>Ecommerce Website</h1>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
