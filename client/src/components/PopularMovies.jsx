import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/carrousel.css";
import PropTypes from "prop-types";
import MovieThumb from "./MovieThumb";
import { useFavorites } from "../contexts/FavoritesContext";
import { useWatchlist } from "../contexts/WatchlistContext";

function PopularMovies({ popularMovies }) {
  const { favorite, setFavorite } = useFavorites();
  const { listed, setListed } = useWatchlist();

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
    },
    breakpoints: {
      "(min-width: 1400px)": {
        slides: {
          perView: 5,
          spacing: 25,
        },
      },
      "(min-width: 768px) and (max-width: 1399px)": {
        slides: {
          perView: 3,
          spacing: 25,
        },
      },
      "(max-width: 767px)": {
        slides: {
          perView: 2,
          spacing: 25,
        },
      },
    },
  });
  return (
    <>
      <h1 className="carrousel-title">Populaires</h1>
      <div ref={sliderRef} className="keen-slider">
        {popularMovies.map((movie, index) => (
          <MovieThumb
            tools={{ movie, index, favorite, setFavorite, listed, setListed }}
            key={movie.id}
          />
        ))}
      </div>
    </>
  );
}

PopularMovies.propTypes = {
  popularMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default PopularMovies;
