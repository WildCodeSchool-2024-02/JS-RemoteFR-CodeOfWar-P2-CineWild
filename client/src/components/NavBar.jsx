import { Link } from "react-router-dom";
import "../styles/navbar.css";

function NavBar() {
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
            <img
              src="../src/assets/images/loupe.svg"
              className="searchbaricon"
              alt="Loupe"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
