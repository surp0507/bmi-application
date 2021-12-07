import React from 'react';
import { Link } from 'react-router-dom';
import { setBmiFormState } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
	const bmiState = useSelector((state) => state.bmiFormReducer.bmiStates);
	const dispatch = useDispatch();

	const Data = JSON.parse(localStorage.getItem('data'));
	console.log(Data);

	const lastData = Data.slice(-5);

	const handleChange = (e) => {
		const { value, name } = e.target;
		dispatch(setBmiFormState({ ...bmiState, [name]: value }));
	};

	return (
		<div>
			<div className="col-sm-8 ">
				<label htmlFor="">UserName:-</label>
				<input
					type="text"
					name="name"
					placeholder="username"
					onChange={handleChange}
				/>
				<Link to="/dashboard">
					<button>submit</button>
				</Link>
				{lastData.map((item) => (
					<p key={item.id} className="white-text center-align">
						{item.name}
					</p>
				))}
			</div>
		</div>
	);
};
