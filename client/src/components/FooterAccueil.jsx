import { Link } from "react-router-dom";

import "../styles/footer.css";

function FooterAccueil() {
  return (
    <footer>
      <div className="image">
        <Link to="/">
          <img src="../src/assets/images/home.svg" alt="home" />
        </Link>
      </div>
      <div className="image">
        <Link to="/favoris">
          <img
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
