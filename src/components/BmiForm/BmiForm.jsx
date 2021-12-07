import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setBmiFormState } from '../../redux/action';
import '../App/App.css';
import { useSelector, useDispatch } from 'react-redux';

const BmiForm = ({ change }) => {
	const bmiState = useSelector((state) => state.bmiFormReducer.bmiStates);

	const { weight, height, date } = bmiState;

	const dispatch = useDispatch();

	const handleChange = (e) => {
		let { value, name } = e.target;
		if (value > 999) {
			value = 999;
		}
		const date = new Date().toLocaleString().split(',')[0];
		dispatch(setBmiFormState({ ...bmiState, [name]: value, date }));
	};

	const handleSubmit = () => {
		change(bmiState);
		dispatch(setBmiFormState(bmiState));
	};

	return (
		<>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="weight">Weight (in kg)</label>
					<input
						id="weight"
						name="weight"
						type="number"
						min="1"
						max="999"
						placeholder="50"
						value={weight}
						onChange={handleChange}
					/>
				</div>

				<div className="col m6 s12">
					<label htmlFor="height">Height (in cm)</label>
					<input
						id="height"
						name="height"
						type="number"
						min="1"
						max="999"
						placeholder="176"
						value={height}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="center">
				<button
					id="bmi-btn"
					className="calculate-btn"
					type="button"
					disabled={weight === '' || height === ''}
					onClick={handleSubmit}
				>
					Calculate BMI
				</button>
			</div>
		</>
	);
};

export default BmiForm;
