import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import noAvatar from "../assets/images/no_avatar.jpg";

export default function PersonResult({ person }) {
  return (
    <div className="resultContent">
      <Link to={`/person/${person.id}`}>
        {person.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${person.profile_path}&language=fr-FR`}
            alt={person.name}
            className="resultSearchImg"
          />
        ) : (
          <img src={noAvatar} alt={person.name} className="resultSearchImg" />
        )}
      </Link>
      <ul>
        <li>{person.name}</li>
      </ul>
    </div>
  );
}

PersonResult.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }).isRequired,
};
