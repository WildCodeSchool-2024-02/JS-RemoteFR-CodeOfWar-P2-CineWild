import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import noAvatar from "../assets/images/no_avatar.jpg";

function ActorThumb({ tools }) {
  const { actor, index } = tools;

  return (
    <div
      key={actor.id}
      className={`keen-slider__slide number-slide${index}`}
      id="film"
    >
      <Link to={`/person/${actor.id}`}>
        {actor.profile_path ? (
          <img
            className="posterCarrouselPicture"
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={`Go to ${actor.name} page`}
          />
        ) : (
          <img
            src={noAvatar}
            alt={actor.name}
            className="posterCarrouselPicture"
          />
        )}
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
