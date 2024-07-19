import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import logoCw from "../assets/images/logocw.svg";
import loupe from "../assets/images/loupe.svg";

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

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navigate = useNavigate();
  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  const onFormSubmit = () => {
    navigate(`/result/movies_or_actors/${search}`);
    toggleSearch();
  };
  const submitting = false;
  return (
    <nav>
      <div className="navbar">
        <ul className="navbuttons">
          <li>
            <label className="burger" htmlFor="burger">
              <title>empty</title>
              <input
                type="checkbox"
                id="burger"
                checked={menuOpen}
                onChange={toggleMenu}
              />
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
                    src={logoCw}
                    className="logocw"
                    alt="Logo - Back to home page"
                  />
                </Link>
              </li>
              <div className={`navigation ${menuOpen ? "open" : ""}`}>
                <Link to="/movies" onClick={closeMenu}>
                  <li>Films</li>
                </Link>
                <Link to="/actors" onClick={closeMenu}>
                  <li>Acteurs</li>
                </Link>
                <Link to="/favoris" onClick={closeMenu}>
                  <li>Favoris</li>
                </Link>
                <Link to="/watchlist" onClick={closeMenu}>
                  <li>Watchlist</li>
                </Link>
              </div>
            </div>
            <li>
              <button
                type="button"
                className="btn_search"
                onClick={toggleSearch}
              >
                <img src={loupe} className="searchbaricon" alt="Loupe" />
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
              <form onSubmit={onFormSubmit}>
                <button type="submit" disabled={submitting}>
                  <span className="material-symbols-outlined">search</span>
                </button>
                <input
                  onChange={handleChangeSearch}
                  type="search"
                  placeholder="Rechercher un film, un acteur,..."
                />
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default NavBar;
