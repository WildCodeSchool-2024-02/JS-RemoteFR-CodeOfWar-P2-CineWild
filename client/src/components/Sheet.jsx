/* eslint-disable import/no-duplicates */
import { useLoaderData, Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import { frenchDate } from "../utils/functions";
import { hourMin } from "../utils/functions";
import "../styles/carrousel.css";
import "keen-slider/keen-slider.min.css";
import "../styles/dataSheet.css";

function Sheet() {
  const { moviePeople, movieDetails, movieCountries } = useLoaderData();
  const creditFilm = moviePeople.cast;
  const productCrew = moviePeople.crew.filter(
    (person) => person.department === "Production"
  );
  const directingCrew = moviePeople.crew.filter(
    (person) => person.department === "Directing"
  );

  const editeurCrew = moviePeople.crew.filter(
    (person) => person.department === "Editing"
  );

  console.info(moviePeople);

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  });

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
  // const movieCasting = moviePeople.cast;

  // const renderCasting = movieCasting.map((cast) => `${cast.name} `);
  return (
    <>
      <h1>Fiche technique</h1>
      <section className="sheet">
        <div className="head-sheet">
          <img
            className="film-img"
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            alt="titre du film"
          />
          <h2>{movieDetails.title}</h2>
        </div>

        <div className="dataSheet">
          <ul>
            <li>
              <span className="blue-Font">Titre Original : </span>
              <span>{movieDetails.original_title}</span>
            </li>
            <li>
              <span className="blue-Font">Langue d'origine : </span>
              <span>{movieDetails.original_language} </span>
            </li>
            <li>
              <span className="blue-Font">Pays d'origine : </span>
              <span>{nativeName()} </span>
            </li>
            <li>
              <span className="blue-Font">Genre : </span>
              <span>{movieDetails.genres.map((genre) => genre.name)}</span>
            </li>
            <li>
              <span className="blue-Font">Date de sortie : </span>
              <span>{frenchDate(movieDetails.release_date)} </span>
            </li>
            <li>
              <span className="blue-Font">Durée : </span>
              <span> {hourMin(movieDetails.runtime)}</span>
            </li>
            <li>
              <span className="blue-Font">Directeurs : </span>
              <span> {directingCrew.map((production) => production.name)}</span>
            </li>
            <li>
              <span className="blue-Font">Editeurs : </span>
              <span> {editeurCrew.map((production) => production.name)}</span>
            </li>
            <li>
              <span className="blue-Font">Producteurs : </span>
              <span> {productCrew.map((production) => production.name)}</span>
            </li>
            <li>
              <span className="blue-Font">Synopsis : </span>
              <span>{movieDetails.overview} </span>
            </li>
          </ul>
        </div>
        <div className="separator">{}</div>
        <h2 className="blue-Font">Casting : </h2>

        <div ref={sliderRef} className="keen-slider">
          {creditFilm.map((actor, index) => (
            <div
              key={actor.id}
              className={`keen-slider__slide number-slide${index}`}
              id="film"
            >
              <Link to={`/movies/${actor.id}`}>
                <img
                  className="posterCarrouselPicture"
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
              </Link>
              {actor.name} <br />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Sheet;
