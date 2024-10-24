import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">Hayday Info</Link>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className={`nav__link ${location.pathname === '/' ? 'active-link' : ''}`}>
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/products" className={`nav__link ${location.pathname === '/products' ? 'active-link' : ''}`}>
                <i className="uil uil-store nav__icon"></i> Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
