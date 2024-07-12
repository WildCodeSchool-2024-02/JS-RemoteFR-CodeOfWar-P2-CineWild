import "../styles/expandabletext.css";
import { useState } from "react";
import PropTypes from "prop-types";

function ExpandableText({ text, maxLength = 100 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
        {text.length > maxLength && (
          <button type="button" onClick={toggleText} className="seemorebutton">
            {isExpanded ? `\u00A0Afficher moins` : `\u00A0Afficher plus`}
          </button>
        )}
      </p>
    </div>
  );
}

export default ExpandableText;

ExpandableText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};