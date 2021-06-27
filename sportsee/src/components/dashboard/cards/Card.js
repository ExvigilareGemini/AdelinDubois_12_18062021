import React from "react";
import PropTypes from "prop-types";

/** Functionnal component displaying a card containing all information to display
 * @param {string} props.icon Icon path to display
 * @param {number} props.value Value to diplay coming from database
 * @param {string} props.unit Type of unit of the value
 * @param {string} props.category Categorie of the value to display
 * @returns JSX of a card
 */
function Card(props) {
  return (
    <div className="card">
      <img className="card_icon" src={props.icon} alt={props.category} />
      <div className="card_valueContainer">
        <p className="card_value">{props.value + props.unit}</p>
        <p className="card_value_type">{props.category}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.number,
  unit: PropTypes.string,
  category: PropTypes.string,
};

export default Card;
