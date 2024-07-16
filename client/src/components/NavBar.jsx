import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "../styles/navbar.css";

function NavBar() {
  const [searchbar, setSearchbar] = useState(false);
  const toggleSearch = () => {
    setSearchbar(!searchbar);
  };
  const handleKeyUp = (event) => {
    if (event.key === " ") {
      toggleSearch(!searchbar);
    }
  };

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/result/movies_or_actors/${search}`);
    toggleSearch();
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
              <span />
              <span />
              <span />
            </label>
          </li>
          <div className="navigation-loupe">
            <div className="logo-navigation">
              <li>
                <Link to="/">
                  <img
                    src="../src/assets/images/logocw.svg"
                    className="logocw"
                    alt="Logo - Back to home page"
                  />
                </Link>
              </li>
              <div className="navigation">
                <Link to="/movies">
                  <li>Films</li>
                </Link>
                <Link to="/actors">
                  <li>Acteurs</li>
                </Link>
              </div>
            </div>
            <li>
              <button
                type="button"
                className="btn_search"
                onClick={toggleSearch}
              >
                <img
                  src="../src/assets/images/loupe.svg"
                  className="searchbaricon"
                  alt="Loupe"
                />
              </button>
            </li>
          </div>
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
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
