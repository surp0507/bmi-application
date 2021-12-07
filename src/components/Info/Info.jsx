import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ weight, height, id, date, bmi, deleteCard, username }) => {
	const handleDelete = () => {
		deleteCard(id);
	};

	return (
		<div className="col m6 s12">
			<div className="card">
				<div className="card-content">
					<span className="card-title" data-test="bmi">
						BMI: {bmi}
					</span>
					<div className="card-data">
						<span data-test="username">{username}</span>
						<span data-test="weight">Weight: {weight} kg</span>
						<span data-test="height">Height: {height} cm</span>
						<span data-test="date">Date: {date}</span>
					</div>

					<button className="delete-btn" onClick={handleDelete}>
						X
					</button>
				</div>
			</div>
		</div>
	);
};

export default Info;
