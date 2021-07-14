import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import calorieIcon from "../../../img/cards/calories-icon.svg";
import proteinIcon from "../../../img/cards/protein-icon.svg";
import carbsIcon from "../../../img/cards/carbs-icon.svg";
import fatIcon from "../../../img/cards/fat-icon.svg";

/** Arrays used to populate created cards with the Cards component
 */
const cardsIconsArray = [calorieIcon, proteinIcon, carbsIcon, fatIcon];
const unitsArray = ["kCal", "g", "g", "g"];
const categoriesArray = ["Calories", "Proteines", "Glucides", "Lipides"];

/** Functionnal component rendering each card with appropriate informations.
 */
function Cards(props) {
  return (
    <div className="cards_container">
      {Object.values(props.keyData).map((value, index) => {
        return (
          <Card
            key={categoriesArray[index] + index}
            value={value}
            icon={cardsIconsArray[index]}
            unit={unitsArray[index]}
            category={categoriesArray[index]}
          />
        );
      })}
    </div>
  );
}

Cards.proptype = {
  keyData: PropTypes.object,
};

export default Cards;
