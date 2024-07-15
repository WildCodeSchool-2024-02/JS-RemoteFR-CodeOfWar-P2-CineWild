import { useLoaderData, Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import { frenchDate, hourMin, cleanString } from "../utils/functions";
import ExpandableText from "../components/ExpandableText";
import ActorThumb from "../components/ActorThumb";
import "../styles/carrousel.css";
import "keen-slider/keen-slider.min.css";
import "../styles/dataSheet.css";

function Sheet() {
  const { moviePeople, movieDetails, movieCountries } = useLoaderData();
  const movieCasting = moviePeople.cast;
  const productCrew = moviePeople.crew.filter(
    (person) => person.department === "Production"
  );
  const directingCrew = moviePeople.crew.filter(
    (person) => person.department === "Directing"
  );

  const editeurCrew = moviePeople.crew.filter(
    (person) => person.department === "Editing"
  );

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 25,
        },
      },
      "(min-width: 768px) and (max-width: 1023px": {
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

  return (
    <>
      <h1 className="sheet-title">Fiche technique</h1>
      <section className="sheet">
        <div className="head-sheet">
          <Link to={`/movies/${movieDetails.id}`}>
            <img
              className="film-img"
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}&language=fr-FR`}
              alt={`Back to${movieDetails.title}`}
            />
          </Link>
          <h2>{movieDetails.title}</h2>
        </div>
        <div className="separator-dataHead">{}</div>
        <div className="dataSheet">
          <ul>
            <li>
              <span className="blue-Font">Titre Original : </span>
              <span>{movieDetails.original_title}</span>
            </li>
            <li>
              <span className="blue-Font">Pays d'origine : </span>
              <span>{nativeName()} </span>
            </li>
            <li>
              <span className="blue-Font">Genre : </span>
              <span>
                {cleanString(
                  movieDetails.genres.map((genre) => `${genre.name}, `)
                )}
              </span>
            </li>
            <li>
              <span className="blue-Font">Etat : </span>
              <span>
                {movieDetails.status === "Post Production"
                  ? "En production"
                  : "Sorti"}{" "}
              </span>
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
              <span>
                {cleanString(
                  directingCrew.map((directeur) => `${directeur.name}, `)
                )}
              </span>
            </li>
            <li>
              <span className="blue-Font">Editeurs : </span>
              <span>
                {cleanString(editeurCrew.map((editeur) => `${editeur.name}, `))}
              </span>
            </li>
            <li>
              <span className="blue-Font">Producteurs : </span>
              <span>
                <ExpandableText
                  text={cleanString(
                    productCrew.map((production) => `${production.name}, `)
                  )}
                />
              </span>
            </li>
            <li>
              <span className="blue-Font">Synopsis : </span>
              <span>
                <ExpandableText text={movieDetails.overview} />{" "}
              </span>
            </li>
          </ul>
        </div>
        <div className="separator-dataCast">{}</div>
        <div className="separator-dataCast-mobile">{}</div>
        <h2 className="casting">Casting : </h2>
        <div ref={sliderRef} className="keen-slider">
          {movieCasting.map((actor, index) => (
            <ActorThumb tools={{ actor, index }} key={actor.id} />
          ))}
        </div>
      </section>
    </>
  );
}
export default Sheet;
