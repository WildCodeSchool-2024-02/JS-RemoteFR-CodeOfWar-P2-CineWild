import { useLoaderData, Link } from "react-router-dom";
import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { frenchDate, hourMin, cleanString } from "../utils/functions";
import ExpandableText from "../components/ExpandableText";
import ActorThumb from "../components/ActorThumb";
import "../styles/carrousel.css";
import "keen-slider/keen-slider.min.css";
import "../styles/dataSheet.css";
import camera from "../assets/images/camera.jpg";

function Sheet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { moviePeople, movieDetails, movieCountries } = useLoaderData();
  const movieCasting = moviePeople.cast;

  const productCrew = moviePeople.crew
    .filter((person) => person.department === "Production")
    .slice(0, 10);

  const renderProductCrew = productCrew.map((productor, index, array) => (
    <Link
      className="sheetCrew"
      key={productor.id}
      to={`/person/${productor.id}`}
    >
      {productor.name}
      {index < array.length - 1 ? ", " : ""}
    </Link>
  ));

  const directingCrew = moviePeople.crew.filter(
    (person) => person.department === "Directing"
  );

  const renderDirectingCrew = directingCrew.map((director, index, array) => (
    <Link className="sheetCrew" key={director.id} to={`/person/${director.id}`}>
      {director.name}
      {index < array.length - 1 ? ", " : ""}
    </Link>
  ));

  const editorCrew = moviePeople.crew.filter(
    (person) => person.department === "Editing"
  );

  const renderEditorCrew = editorCrew.map((editor, index, array) => (
    <Link className="sheetCrew" key={editor.id} to={`/person/${editor.id}`}>
      {editor.name}
      {index < array.length - 1 ? ", " : ""}
    </Link>
  ));

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
    },
    breakpoints: {
      "(min-width: 1400px)": {
        slides: {
          perView: 4,
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
            {movieDetails.poster_path ? (
              <img
                className="film-img"
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}&language=fr-FR`}
                alt={`Back to${movieDetails.title}`}
              />
            ) : (
              <img src={camera} className="brokeImg" alt={movieDetails.title} />
            )}
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
                  : "Sortie"}{" "}
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
              <span>{renderDirectingCrew}</span>
            </li>
            <li>
              <span className="blue-Font">Editeurs : </span>
              <span>{renderEditorCrew}</span>
            </li>
            <li>
              <span className="blue-Font">Producteurs : </span>
              <span>{renderProductCrew}</span>
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
        <h2 className="casting">Casting </h2>
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
