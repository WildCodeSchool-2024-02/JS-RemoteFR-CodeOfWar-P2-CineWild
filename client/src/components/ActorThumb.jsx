import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ActorThumb({ tools }) {
  const { actor, index } = tools;

  return (
    <div
      key={actor.id}
      className={`keen-slider__slide number-slide${index}`}
      id="film"
    >
      <Link to={`/actors/${actor.id}`}>
        <img
          className="posterCarrouselPicture"
          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt={`Go to ${actor.name} page`}
        />
      </Link>
      {actor.name} <br />
    </div>
  );
}

ActorThumb.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
}.isRequired;

export default ActorThumb;
