import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/carrousel.css";
// import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function PopularMovies() {
  const popularmovies = useLoaderData();
  // const [popularmovies, setPopularMovies] = useState([]);

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  });

  // useEffect(() => {
  // fetchData();
  // }, []);

  return (
    <>
      <h1>Populaires</h1>

      <div ref={sliderRef} className="keen-slider">
        {popularmovies.map((popularmovie, index) => (
          <div
            key={popularmovie.id}
            className={`keen-slider__slide number-slide${index}`}
            id="film"
          >
            <img
              className="posterCarrouselPicture"
              src={`https://image.tmdb.org/t/p/w500${popularmovie.poster_path}`}
              alt={popularmovie.title}
            />
            {popularmovie.title} <br />
            {popularmovie.vote_average}
          </div>
        ))}
      </div>
    </>
  );
}

export default PopularMovies;
