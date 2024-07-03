import "../styles/footer.css";

function FooterAccueil() {
  return (
    <div className="footer">
      <div className="home">
        <img
          src="../src/assets/images/home.svg"
          alt="home"
          width={50}
          height={50}
        />
      </div>
      <div className="favoris">
        <img
          src="../src/assets/images/favorite.svg"
          alt="favoris"
          width={50}
          height={50}
        />
      </div>
      <div className="profil">
        <img
          src="../src/assets/images/user.svg"
          alt="profil"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}
export default FooterAccueil;
