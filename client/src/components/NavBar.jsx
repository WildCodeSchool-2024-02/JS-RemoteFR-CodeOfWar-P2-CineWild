import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

function NavBar() {
  const [search, setSearch] = useState(false);
  const toggleSearch = () => {
    setSearch(!search);
  };
  const handleKeyUp = (event) => {
    if (event.key === "enter" || event.key === " ") {
      toggleSearch(!search);
    }
  };

  return (
    <nav>
      <div className="navbar">
        <ul className="navbuttons">
          <li>
            <img
              src="../src/assets/images/menuburger.svg"
              className="menuburger"
              alt="Bouton menu"
            />
          </li>
          <li>
            <Link to="/">
              <img
                src="../src/assets/images/logocw.svg"
                className="logocw"
                alt="Logo"
              />
            </Link>
          </li>
          <li>
            <button type="button" className="btn_search" onClick={toggleSearch}>
              <img
                src="../src/assets/images/loupe.svg"
                className="searchbaricon"
                alt="Loupe"
              />
            </button>
          </li>
        </ul>
        {search && (
          <div className="search">
            <div
              className="overlay"
              role="button"
              tabIndex="0"
              onClick={toggleSearch}
              onKeyUp={handleKeyUp}
            >
              <title>empty</title>
            </div>
            <div className="search-content">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                    <title>empty</title>
                  </path>
                </g>
              </svg>
              <input
                type="search"
                placeholder="Rechercher un film, un acteur,..."
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
