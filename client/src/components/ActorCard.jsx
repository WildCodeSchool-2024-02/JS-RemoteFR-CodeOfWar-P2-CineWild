import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ActorCard({ actor }) {
  return (
    <div className="actorCard" key={actor.id}>
      <h2>{actor.name}</h2>
      <Link to={`/person/${actor.id}`}>
        <img
          className="actorCardContent"
          src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}&language=fr-FR`}
          alt={actor.name}
        />
      </Link>
    </div>
  );
}

ActorCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
}.isRequired;

export default ActorCard;
