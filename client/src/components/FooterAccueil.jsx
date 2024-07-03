import { Link } from "react-router-dom";

import "../styles/footer.css";

function FooterAccueil() {
  return (
    <div className="footer">
      <div className="home">
        <Link to="/">
            <img
            src="../src/assets/images/home.svg"
            alt="home"
            width={50}
            height={50}
            />
        </Link>
      </div>
      <div className="favoris">
       <Link to="/favoris">
        <img
            src="../src/assets/images/favorite.svg"
            alt="favoris"
            width={50}
            height={50}
            />
       </Link>
      </div>
      <div className="profil">
        <Link to="user">
            <img
            src="../src/assets/images/user.svg"
            alt="profil"
            width={50}
            height={50}
            />
        </Link>
      </div>
    </div>
  );
  
}
export default FooterAccueil;
