import { useFavorites } from "../contexts/FavoritesContext";
import "../styles/favoris.css";

function Favoris() {
  const { favorite } = useFavorites();
  return (
    <>
      <h1>Mes favoris</h1>
      <div className="myFavoriteMovies">
        {favorite.map((favoris) => (
          <div key={favoris.title} className="myFavoris">
            <img
              src={`https://image.tmdb.org/t/p/w500${favoris.backdrop_path}`}
              alt={favoris.title}
            />
            <p> {favoris.title} </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Favoris;
