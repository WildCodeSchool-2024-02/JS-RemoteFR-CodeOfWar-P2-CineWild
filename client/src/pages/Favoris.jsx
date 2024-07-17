import { useFavorites } from "../contexts/FavoritesContext";
import "../styles/favoris.css";
import MovieThumb from "../components/MovieThumb";

function Favoris() {
  const { favorite, setFavorite } = useFavorites();
  return (
    <>
      <h1>Mes favoris</h1>
      <div className="myFavoriteMovies">
        {favorite.map((movie, index) => (
           <MovieThumb tools={{ movie, index, favorite, setFavorite }} key={movie.id}
         />
        ))}
      </div>
    </>
  );
}

export default Favoris;
