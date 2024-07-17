import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/carrousel.css";
import PropTypes from "prop-types";
import MovieThumb from "./MovieThumb";
import { useFavorites } from "../contexts/FavoritesContext";

function Carrousel({ trendingMovies }) {
  const { favorite, setFavorite } = useFavorites();

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  });

  return (
    <section className="carrousel-home">
      <h1>Tendances</h1>
      <div ref={sliderRef} className="keen-slider">
        {trendingMovies.map((movie, index) => (
          <MovieThumb
            tools={{ movie, index, favorite, setFavorite }}
            key={movie.id}
          />
        ))}
      </div>
    </section>
  );
}

Carrousel.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carrousel;
