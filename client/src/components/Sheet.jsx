import { useLoaderData } from "react-router-dom";
import "../styles/dataSheet.css";

function Sheet() {
  const movieDetails = useLoaderData();
  console.info(movieDetails);

  return (
    <>
      <h1>Fiche technique</h1>

      <h2 className="blue-Font">{movieDetails.title}</h2>
      <section className="sheet">
        <img
          className="film-img"
          src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
          alt="titre du film"
        />

        <div className="dataSheet">
          <ul>
            <li>
              <span className="blue-Font">Titre Original : </span>
              <span>{movieDetails.title}</span>
            </li>
            <li>
              <span className="blue-Font">Langue d'origine : </span>
              <span>{movieDetails.original_language} </span>
            </li>
            <li>
              <span className="blue-Font">Pays d'origine : </span>
              <span>{movieDetails.origin_country} </span>
            </li>
            <li>
              <span className="blue-Font">Genre : </span>
              <span>{movieDetails.genres.map((genre) => genre.name)}</span>
            </li>
            <li>
              <span className="blue-Font">Date de sortie : </span>
              <span>{movieDetails.release_date} </span>
            </li>
            <li>
              <span className="blue-Font">Durée : </span>
              <span> {movieDetails.runtime}</span>
            </li>
            <li>
              <span className="blue-Font">Studio : </span>
              <span>
                {" "}
                {movieDetails.production_companies.map(
                  (production) => production.name
                )}
              </span>
            </li>
            <li>
              <span className="blue-Font">Synopsis : </span>
              <span>{movieDetails.overview} </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default Sheet;
