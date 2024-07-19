import { Link } from "react-router-dom";
import "../styles/footer.css";
import home from "../assets/images/home.svg";
import favorite from "../assets/images/favorite.svg";
import user from "../assets/images/user.svg";

function FooterAccueil() {
  return (
    <footer>
      <div className="image">
        <Link to="/">
          <img className="imgFooter" src={home} alt="home" />
        </Link>
      </div>
      <div className="image">
        <Link to="/favoris">
          <img
            className="imgFooter"
            src={favorite}
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
            src={user}
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
