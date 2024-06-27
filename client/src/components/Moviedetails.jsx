import { useState } from "react";
import "../styles/moviedetails.css";
import PropTypes from "prop-types";

function AllTrendingMovies({ allTrendingMovies }) {
  const [isFavorite, setIsFavorite] = useState("");
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const releaseYear = () => {
    const date = new Date(allTrendingMovies[0].release_date);
    const year = date.getFullYear();
    return year;
  };

  return (
    <>
      {allTrendingMovies.length ? (
        <>
          <div
            className="movieCard"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${allTrendingMovies[0].backdrop_path})`,
            }}
          >
            <h1>{allTrendingMovies[0].title}</h1>
            <ul className="movieCardContent">
              <img
                src={`https://image.tmdb.org/t/p/w500/${allTrendingMovies[0].poster_path}`}
                alt=""
                className="frontImg"
              />
              <div className="movieCardList">
                <li>{allTrendingMovies[0].original_title}</li>
                <li>{releaseYear()} | Durée ?</li>
                <li>
                  <ul>
                    {allTrendingMovies[0].genre_ids[0]},
                    {allTrendingMovies[0].genre_ids[1]},
                    {allTrendingMovies[0].genre_ids[2]}
                  </ul>
                </li>
                <div className="ratingAndFavorite">
                  <li>⭐{allTrendingMovies[0].vote_average.toFixed(1)}</li>
                  <button onClick={handleClickFavorite} type="button">
                    {isFavorite ? "Remove ❤️" : "Add 🖤"}
                  </button>
                </div>
              </div>
            </ul>
          </div>
          <div className="movieDescription">
            <ul>
              <li>
                <span className="blue-Font">Film de :</span>
                <span> Personne (2ème API)</span>
              </li>
              <li>
                <span className="blue-Font">En salle depuis :</span>
                <span> {allTrendingMovies[0].release_date}</span>
              </li>

              <li>
                <span className="blue-Font">Casting principal :</span>
                <span> Acteur 1, acteur 2 (2ème API)</span>
              </li>
              <li>
                <span className="blue-Font">Pays d'origine :</span>
                <span> Pays 1, Pays 2</span>
              </li>
            </ul>
          </div>
          <div className="synopsis">
            <h3 className="blue-Font">Synopsis</h3>
            <p>{allTrendingMovies[0].overview}</p>
          </div>
          <button className="blue-Font fullDetails" type="button">
            Fiche technique
          </button>
        </>
      ) : null}

      <p>Pour ne pas qu'ESlint rougisse</p>
    </>
  );
}

AllTrendingMovies.propTypes = {
  allTrendingMovies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default AllTrendingMovies;
