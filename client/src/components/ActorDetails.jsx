import { useLoaderData } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/actorDetails.css";
import MovieThumb from "./MovieThumb";

function ActorDetails() {
  const { actorDetails, actorMovies } = useLoaderData();
  console.info(actorDetails, actorMovies);

  const releaseDate = () => {
    const event = new Date(actorDetails.birthday);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return event.toLocaleDateString("fr-FR", options);
  };

  const calculateAge = (newBirthdayDate) => {
    const today = new Date();
    const birthDate = new Date(newBirthdayDate);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age -= 1;
    }
    return age;
  };

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  });

  return (
    <div className="actorContainer">
      <section className="actor">
        <img
          className="actor_img"
          src={`https://image.tmdb.org/t/p/w500/${actorDetails.profile_path}&language=fr-FR`}
          alt={actorDetails.name}
        />
        <div className="actordetails">
          <h1 className="actorName">{actorDetails.name}</h1>
          <ul>
            <li>
              <span className="blue-Font">Genre:</span>{" "}
              {actorDetails.gender === 1 ? "Femme" : "Homme"}{" "}
            </li>
            <li>
              <span className="blue-Font">Lieu de Naissance:</span>{" "}
              {actorDetails.place_of_birth}{" "}
            </li>
            <li>
              <span className="blue-Font">Date de Naissance:</span>{" "}
              {releaseDate(actorDetails.birthday)}{" "}
            </li>
            <li>
              <span className="blue-Font">Age:</span>{" "}
              {calculateAge(actorDetails.birthday)} ans{" "}
            </li>
          </ul>
        </div>
      </section>
      <div className="separator">{}</div>
      <div className="biographie">
        <h2> Biographie :</h2>
        <p>
          {actorDetails.biography !== ""
            ? actorDetails.biography
            : "Pas de Biographie"}
        </p>
      </div>
      <div className="separator">{}</div>
      <div className="filmography">
        <h2> Filmographie :</h2>
        <div ref={sliderRef} className="keen-slider">
          {actorMovies.map((movie, index) => (
            <MovieThumb tools={{ movie, index }} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActorDetails;
