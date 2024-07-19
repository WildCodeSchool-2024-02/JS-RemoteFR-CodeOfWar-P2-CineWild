import { useLoaderData } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";
import ExpandableText from "../components/ExpandableText";
import "../styles/actorDetails.css";
import MovieThumb from "../components/MovieThumb";
import { frenchDate } from "../utils/functions";
import { useFavorites } from "../contexts/FavoritesContext";
import { useWatchlist } from "../contexts/WatchlistContext";
import noAvatar from "../assets/images/no_avatar.jpg";

function ActorDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { actorDetails, actorMovies } = useLoaderData();
  const { favorite, setFavorite } = useFavorites();
  const { listed, setListed } = useWatchlist();

  // Show age or age when deceased for a person
  function calculateAge(birthdayDate, deathdayDate) {
    const birthDate = new Date(birthdayDate);
    const today = new Date();
    const deathDate = deathdayDate ? new Date(deathdayDate) : null;
    let age;

    if (!deathDate) {
      age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        age -= 1;
      }
      return (
        <li>
          <span className="blue-Font">Age :</span> {age} ans{" "}
        </li>
      );
    }
    age = deathDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = deathDate.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && deathDate.getDate() < birthDate.getDate())
    ) {
      age -= 1;
    }
    return (
      <li>
        <span className="blue-Font">Décès :</span>{" "}
        {frenchDate(actorDetails.deathday)} à l'âge de {age} ans{" "}
      </li>
    );
  }

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

  return (
    <div className="actorContainer">
      <h1 className="actorName">{actorDetails.name}</h1>
      <section className="actor">
        {actorDetails.profile_path ? (
          <img
            className="actor_img"
            src={`https://image.tmdb.org/t/p/w500/${actorDetails.profile_path}&language=fr-FR`}
            alt={actorDetails.name}
          />
        ) : (
          <img src={noAvatar} alt={actorDetails.name} className="actor_img" />
        )}

        <div className="actordetails">
          <ul>
            <li>
              <span className="blue-Font">Genre :</span>{" "}
              {actorDetails.gender === 1 ? "Femme" : "Homme"}{" "}
            </li>
            <li>
              <span className="blue-Font">Lieu de Naissance :</span>{" "}
              {actorDetails.place_of_birth}{" "}
            </li>
            <li>
              <span className="blue-Font">Date de Naissance : </span>
              {frenchDate(actorDetails.birthday)}{" "}
            </li>
            {calculateAge(actorDetails.birthday, actorDetails.deathday)}
          </ul>
        </div>
      </section>
      <div className="separator">{}</div>
      <div className="biographie">
        <h2> Biographie :</h2>
        <p>
          <ExpandableText
            text={
              actorDetails.biography !== ""
                ? actorDetails.biography
                : "Pas de Biographie"
            }
          />
        </p>
      </div>
      <div className="separator">{}</div>
      <div className="filmography">
        <h2> Filmographie :</h2>
        <div ref={sliderRef} className="keen-slider">
          {actorMovies.map((movie, index) => (
            <MovieThumb
              tools={{ movie, index, favorite, setFavorite, listed, setListed }}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActorDetails;
