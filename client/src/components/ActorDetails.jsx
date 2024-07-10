import { useLoaderData } from "react-router-dom";
import "../styles/actorDetails.css";

function ActorDetails() {
  const actorInfo = useLoaderData();
  console.info(actorInfo);

  const releaseDate = () => {
    const event = new Date(actorInfo.birthday);
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

    // Vérifie si le jour d'anniversaire est déjà passé cette année
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age -= 1;
    }
    return age;
  };

  return (
    <div className="actorContainer">
      <img
        src={`https://image.tmdb.org/t/p/w500/${actorInfo.profile_path}&language=fr-FR`}
        alt={actorInfo.name}
      />
      <div className="actordetails">
        <h1 className="actorName">{actorInfo.name}</h1>
        <ul>
          <li>
            <span className="blue-Font">Genre:</span>{" "}
            {actorInfo.gender === 1 ? "Femme" : "Homme"}{" "}
          </li>
          <li>
            <span className="blue-Font">Lieu de Naissanse</span>{" "}
            {actorInfo.place_of_birth}{" "}
          </li>
          <li>
            <span className="blue-Font">Date de Naissanse:</span>{" "}
            {releaseDate(actorInfo.birthday)}{" "}
          </li>
          <li>
            <span className="blue-Font">Age:</span>{" "}
            {calculateAge(actorInfo.birthday)}{" "}
          </li>
        </ul>
      </div>
      <div className="biographie">
        <h2> Biographie</h2>
        <p>{actorInfo.biography}</p>
      </div>
    </div>
  );
}

export default ActorDetails;
