import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "../styles/navbar.css";

function NavBar() {
  const [searchbar, setSearchbar] = useState(false);
  const toggleSearch = () => {
    setSearchbar(!searchbar);
  };
  const handleKeyUp = (event) => {
    if (event.key === "enter" || event.key === " ") {
      toggleSearch(!searchbar);
    }
  };

  // Recherche dynamique :
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/movies/${search}`);
  };

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <nav>
      <div className="navbar">
        <ul className="navbuttons">
          <li>
            <label className="burger" htmlFor="burger">
              <title>empty</title>
              <input type="checkbox" id="burger" />
              <span>
                <title>empty</title>
              </span>
              <span>
                <title>empty</title>
              </span>
              <span>
                <title>empty</title>
              </span>
            </label>
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
        {searchbar && (
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
              <button onClick={redirect} type="button">
                <span className="material-symbols-outlined">search</span>
              </button>
              <input
                onChange={handleChangeSearch}
                type="search"
                placeholder="Rechercher un film, un acteur,..."
              />
            </div>
            <div className="test">
              <h1>Futur résultat qui doit s'afficher ici</h1>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
