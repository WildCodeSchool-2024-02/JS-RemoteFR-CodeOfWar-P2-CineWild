import { useFavorites } from "../contexts/FavoritesContext";
import "../styles/favoris.css";
import MovieThumb from "../components/MovieThumb";
import { useWatchlist } from "../contexts/WatchlistContext";

function Favoris() {
  const { favorite, setFavorite } = useFavorites();
  const { listed, setListed } = useWatchlist();

  return (
    <section className="favorite-page">
      <h1>Mes favoris</h1>
      <div className="myFavoriteMovies">
        {favorite.map((movie, index) => (
          <MovieThumb
            tools={{ movie, index, favorite, setFavorite, listed, setListed }}
            key={movie.id}
          />
        ))}
      </div>
    </section>
  );
}

export default Favoris;
