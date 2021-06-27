import React from 'react';

function Card(props) {
	return (
		<div className="card">
			<img className="card_icon" src={props.icon} alt="" />
			<div className="card_valueContainer">
				<p className="card_value">{props.value + props.unit}</p>
				<p className="card_value_type">{props.category}</p>
			</div>
		</div>
	);
}

export default Card;
