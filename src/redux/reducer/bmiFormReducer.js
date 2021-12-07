import { SET_BMI_FORM_STATE } from '../constants';

const initialState = {
	bmiStates: {
		weight: '',
		height: '',
		date: '',
		username: '',
	},
};

export const bmiFormReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_BMI_FORM_STATE:
			return {
				...state,
				bmiStates: action.payload,
			};
		default:
			return state;
	}
};
