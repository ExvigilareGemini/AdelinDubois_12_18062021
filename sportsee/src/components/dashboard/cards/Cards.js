import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import getUserDatas from "../../../callservice";
import calorieIcon from "../../../img/cards/calories-icon.svg";
import proteinIcon from "../../../img/cards/protein-icon.svg";
import carbsIcon from "../../../img/cards/carbs-icon.svg";
import fatIcon from "../../../img/cards/fat-icon.svg";

/** Arrays used to populate created cards with the Cards component
 */
const cardsIconsArray = [calorieIcon, proteinIcon, carbsIcon, fatIcon];
const unitsArray = ["kCal", "g", "g", "g"];
const categoriesArray = ["Calories", "Proteines", "Glucides", "Lipides"];

/** Class component rendering each card with appropriate informations.
 */
export class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valueToDisplay: "",
    };
  }

  /** Getting information in the database, stocking it in this.state and passing it to the displayed components.
   */
  async componentDidMount() {
    const userKeyDatas = await getUserDatas(this.props.id);
    this.setState({ valueToDisplay: userKeyDatas.data.data.keyData });
  }

  /** Render each card calling Card component and populate them with informations that are coming from database and populating arrays.
   * @returns JSX array
   */
  render() {
    return (
      <div className="cards_container">
        {Object.values(this.state.valueToDisplay).map((value, index) => {
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
}

Cards.proptype = {
  id: PropTypes.number,
};

export default Cards;
