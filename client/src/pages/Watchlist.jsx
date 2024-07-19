import { useWatchlist } from "../contexts/WatchlistContext";
import MovieThumb from "../components/MovieThumb";
import { useFavorites } from "../contexts/FavoritesContext";

function Watchlist() {
  const { favorite, setFavorite } = useFavorites();
  const { listed, setListed } = useWatchlist();
  return (
    <section className="favorite-page">
      <h1>Ma watchlist</h1>
      <div className="myFavoriteMovies">
        {listed.map((movie, index) => (
          <MovieThumb
            tools={{ movie, index, favorite, setFavorite, listed, setListed }}
            key={movie.id}
          />
        ))}
      </div>
    </section>
  );
}
export default Watchlist;
