import PropTypes from "prop-types";
import { useEffect } from "react";
import "../styles/moviedetails.css";
import { useLoaderData, Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import ExpandableText from "../components/ExpandableText";
import { yearDate, frenchDate, hourMin, cleanString } from "../utils/functions";
import ActorThumb from "../components/ActorThumb";
import camera from "../assets/images/camera.jpg";
import { useFavorites } from "../contexts/FavoritesContext";
import { useWatchlist } from "../contexts/WatchlistContext";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { favorite, setFavorite } = useFavorites();
  const { listed, setListed } = useWatchlist();

  if (!Array.isArray(listed)) {
    return null;
  }

  const isWatchListed = listed.some(
    (watchMovie) => watchMovie.id === movieDetails.id
  );

  const addToWatchlist = () => {
    if (isWatchListed) {
      setListed((prevListed) =>
        prevListed.filter((watchMovie) => watchMovie.id !== movieDetails.id)
      );
    } else {
      setListed((prevListed) => [...prevListed, movieDetails]);
    }
  };

  if (!Array.isArray(favorite)) {
    return null;
  }

  const isFavorite = favorite.some(
    (favMovie) => favMovie.id === movieDetails.id
  );

  const addToFavorite = () => {
    if (isFavorite) {
      setFavorite((prevFavorites) =>
        prevFavorites.filter((favMovie) => favMovie.id !== movieDetails.id)
      );
    } else {
      setFavorite((prevFavorites) => [...prevFavorites, movieDetails]);
    }
  };

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

  const renderCrew = filteredCrew.map((director, index, array) => (
    <Link key={director.id} to={`/person/${director.id}`}>
      {director.name}
      {index < array.length - 1 ? ", " : ""}
    </Link>
  ));

  const renderCasting = movieCasting.slice(0, 4).map((cast, index, array) => (
    <Link key={cast.id} to={`/person/${cast.id}`}>
      {cast.name}
      {index < array.length - 1 ? ", " : ""}
    </Link>
  ));

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
          {movieDetails.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}&language=fr-FR`}
              alt={movieDetails.title}
              className="frontImg"
            />
          ) : (
            <img src={camera} alt={movieDetails.title} className="brokeImg" />
          )}
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
                <button type="button" onClick={addToFavorite}>
                  {isFavorite ? "❤️" : "🤍"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="watchlistbutton"
                  onClick={addToWatchlist}
                >
                  {isWatchListed ? "✔️" : "📌"}
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
            <span className="crew">{renderCrew}</span>
          </li>
          <li>
            <span className="blue-Font">Sortie en salle le :</span>
            <span> {frenchDate(movieDetails.release_date)}</span>
          </li>

          <li>
            <span className="blue-Font">Casting principal : </span>
            <span className="casting">{renderCasting}</span>
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
