import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    return (
        <header className="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">
                    Hayday Info
                </Link>

                <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link
                                to="/"
                                className={`nav__link ${location.pathname === "/" ? "active-link" : ""}`}
                                onClick={() => setShowMenu(false)}
                            >
                                <i className="uil uil-estate nav__icon"></i>{" "}
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to="/products"
                                className={`nav__link ${location.pathname === "/products" ? "active-link" : ""}`}
                                onClick={() => setShowMenu(false)}
                            >
                                <i className="uil uil-store nav__icon"></i>{" "}
                                Products
                            </Link>
                        </li>
                    </ul>
                </div>

                <div
                    className="nav__toggle"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <i
                        className={`uil ${showMenu ? "uil-times" : "uil-apps"}`}
                    ></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;
