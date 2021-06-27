import React from 'react';
import Card from './Card';
import getUserKeyDatas from '../../../callservice';
import calorieIcon from '../../../img/cards/calories-icon.svg';
import proteinIcon from '../../../img/cards/protein-icon.svg';
import carbsIcon from '../../../img/cards/carbs-icon.svg';
import fatIcon from '../../../img/cards/fat-icon.svg';

const cardsIconsArray = [calorieIcon, proteinIcon, carbsIcon, fatIcon];
const unitsArray = ["kCal", "g", "g", "g"];
const categoriesArray = ["Calories", "Proteines", "Glucides", "Lipides"];

export class Cards extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			valueToDisplay : ''
		};
	}

	async componentDidMount() {
		const userKeyDatas = await getUserKeyDatas(this.props.id);
		this.setState({ valueToDisplay : userKeyDatas.data.data.keyData});
	}

	render() {
		return (
			<div className="cards_container">
			{Object.values(this.state.valueToDisplay).map((value ,index) => {
				return <Card key={categoriesArray[index] + index} value={value} icon={cardsIconsArray[index]} unit={unitsArray[index]} category={categoriesArray[index]} />
			})}
			</div>
		)
	}
}

export default Cards