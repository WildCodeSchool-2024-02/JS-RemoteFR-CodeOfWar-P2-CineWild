// import { useLoaderData } from "react-router-dom";

// const dataInfo = useLoaderData();

// console.info(dataInfo);
function Sheet() {
  return (
    <>
      <h1>Fiches technique</h1>
      <p>blablabla</p>
      <h2 className="blue-Font">titre du film </h2>

      <div className="dataSheet">
        {/* <img
                className="posterCarrouselPicture"
                src= source du film 
               alt= titre du film /> */}

        <ul>
          <li>
            <span className="blue-Font">Titre Original :</span>
            <span>original_title </span>
          </li>
          <li>
            <span className="blue-Font">Langue d'origine :</span>
            <span>original_language </span>
          </li>
          <li>
            <span className="blue-Font">Pays d'origine :</span>
            <span>origin_country </span>
          </li>
          <li>
            <span className="blue-Font">Genre :</span>
            <span>genres </span>
          </li>
          <li>
            <span className="blue-Font">Date de sortie :</span>
            <span>release_date </span>
          </li>
          <li>
            <span className="blue-Font">Durée :</span>
            <span> runtime</span>
          </li>
          <li>
            <span className="blue-Font">Réalisateur :</span>
            <span>réalisateur </span>
          </li>
          <li>
            <span className="blue-Font">Synopsis :</span>
            <span>overview </span>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Sheet;
