import { Link } from "react-router-dom";

import "../styles/footer.css";

function FooterAccueil() {
  return (
    <footer>
      <div className="image">
        <Link to="/">
          <img
            className="imgFooter"
            src="../src/assets/images/home.svg"
            alt="home"
          />
        </Link>
      </div>
      <div className="image">
        <Link to="/favoris">
          <img
            className="imgFooter"
            src="../src/assets/images/favorite.svg"
            alt="favoris"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="image">
        <Link to="user">
          <img
            className="imgFooter"
            src="../src/assets/images/user.svg"
            alt="profil"
            width={50}
            height={50}
          />
        </Link>
      </div>
    </footer>
  );
}
export default FooterAccueil;
