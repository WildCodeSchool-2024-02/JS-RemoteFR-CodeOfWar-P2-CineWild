import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/moviedetails.css";

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);

  const fetchData = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=7d69be1456b1669d67a9f811eab55eec&language=fr-FR"
      )
      .then((response) => {
        setMovieDetails(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.info(movieDetails);

  useEffect(() => {
    fetchData();
  }, []);

  const [isFavorite, setIsFavorite] = useState("");
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const releaseYear = () => {
    const date = new Date(movieDetails[0].release_date);
    const year = date.getFullYear();
    return year;
  };

  return (
    <>
      {movieDetails.length ? (
        <>
          <div
            className="movieCard"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieDetails[0].backdrop_path})`,
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails[0].poster_path}`}
              alt=""
              className="frontImg"
            />

            <h1>{movieDetails[0].title}</h1>
            <ul>
              <li>{movieDetails[0].original_title}</li>
              <li>{releaseYear()} | Durée ?</li>
              <li>
                <ul>
                  {movieDetails[0].genre_ids[0]} {movieDetails[0].genre_ids[1]}{" "}
                  {movieDetails[0].genre_ids[2]}
                </ul>
              </li>
              <div className="ratingAndAddFavorite">
                <li>{movieDetails[0].vote_average} ⭐</li>
                <button onClick={handleClickFavorite} type="button">
                  {isFavorite ? "❤️" : "🖤"}
                </button>
              </div>
            </ul>
          </div>
          <div className="movieDescription">
            <ul>
              <li>
                <span className="blue-Font">Film de :</span>
              </li>
              <li>
                <span className="blue-Font">En salle depuis :</span>
                <span> {movieDetails[0].release_date}</span>
              </li>

              <li>
                <span className="blue-Font">Casting principal :</span>
                <span> Acteur 1, acteur 2</span>
              </li>
              <li>
                <span className="blue-Font">Pays d'origine :</span>
                <span> Pays 1, Pays 2</span>
              </li>
            </ul>
          </div>
          <div className="synopsis">
            <h3 className="blue-Font">Synopsis</h3>
            <p>{movieDetails[0].overview}</p>
          </div>
          <button className="blue-Font" type="button">
            Fiche technique
          </button>
        </>
      ) : null}

      <p>Pour ne pas qu'ESlint rougisse</p>
    </>
  );
}

export default MovieDetails;
