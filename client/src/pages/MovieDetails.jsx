import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/moviedetails.css";
import { useLoaderData, Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import ExpandableText from "../components/ExpandableText";
import { yearDate, frenchDate, hourMin, cleanString } from "../utils/functions";
import ActorThumb from "../components/ActorThumb";

function MovieDetails() {
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
      "(min-width: 768px) and (max-width: 1399px": {
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

  const { moviePeople, movieDetails, movieCountries } = useLoaderData();
  const movieCasting = moviePeople.cast.slice(0, 6);

  function nativeName() {
    return movieDetails.origin_country
      .map((iso) => {
        const foundIndex = movieCountries.findIndex(
          (country) => country.iso_3166_1 === iso
        );
        return movieCountries[foundIndex].native_name;
      })
      .join(", ");
  }

  const filteredCrew = moviePeople.crew
    .filter((person) => person.department === "Directing")
    .slice(0, 3);

  const [isFavorite, setIsFavorite] = useState("");
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const [isWatchListed, setIsWatchListed] = useState("");
  const handleClickWatchlist = () => {
    setIsWatchListed(!isWatchListed);
  };

  const renderCrew = filteredCrew.map((director) => `${director.name}, `);
  const renderCasting = movieCasting
    .slice(0, 4)
    .map((cast) => `${cast.name}, `);
  const renderGenres = movieDetails.genres.map((genre) => `${genre.name}, `);

  return (
    <>
      <div className="movieCard">
        <div
          className="film-background"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}&language=fr-FR)`,
          }}
        >
          <title>empty</title>
        </div>
        <h1>{movieDetails.title}</h1>
        <ul className="movieCardContent">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}&language=fr-FR`}
            alt=""
            className="frontImg"
          />
          <div className="movieCardList">
            <li className="title-movie">{movieDetails.original_title}</li>
            <li className="date-movie">
              {yearDate(movieDetails.release_date)} |{" "}
              {hourMin(movieDetails.runtime)}
            </li>
            <li className="genre-movie">
              <p>{cleanString(renderGenres.slice(0, 3))}</p>
            </li>
            <ul className="scoreandbuttons">
              <li>
                ⭐
                {movieDetails.vote_average === 0.0
                  ? " Non noté"
                  : movieDetails.vote_average.toFixed(1)}
              </li>
              <li>
                <button onClick={handleClickFavorite} type="button">
                  {isFavorite ? "❤️" : "🖤"}
                </button>
              </li>
              <li>
                <button
                  className="watchlistbutton"
                  onClick={handleClickWatchlist}
                  type="button"
                >
                  {isWatchListed ? "Watchlist ✔️ " : "Watchlist 📌"}
                </button>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      <div className="movieDescription">
        <ul>
          <li>
            <span className="blue-Font">Dirigés par : </span>
            <span>{cleanString(renderCrew)}</span>
          </li>
          <li>
            <span className="blue-Font">En salle depuis :</span>
            <span> {frenchDate(movieDetails.release_date)}</span>
          </li>

          <li>
            <span className="blue-Font">Casting principal : </span>
            <span className="casting">{cleanString(renderCasting)}</span>
          </li>
          <li>
            <span className="blue-Font">Pays d'origine : </span>
            <span>{nativeName()}</span>
          </li>
          <li>
            <button className="blue-Font fullDetails" type="button">
              <Link to={`/movies/${movieDetails.id}/sheet`}>
                Fiche technique
              </Link>
            </button>
          </li>
        </ul>
      </div>
      <div className="separator-movieCard">{}</div>
      <div className="synopsis">
        <h3 className="blue-Font">Synopsis</h3>
        <p>
          <ExpandableText text={movieDetails.overview} maxLength={90} />
        </p>
      </div>
      <div className="separator-movieCard">{}</div>
      <section className="casting">
        <h3 className="blue-Font">Casting</h3>
        <div ref={sliderRef} className="keen-slider">
          {movieCasting.map((actor, index) => (
            <ActorThumb tools={{ actor, index }} key={actor.id} />
          ))}
        </div>
      </section>
    </>
  );
}

ExpandableText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};

export default MovieDetails;
