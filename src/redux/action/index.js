import * as types from '../constants/index';

export const setBmiFormState = (payload) => {
	return {
		type: types.SET_BMI_FORM_STATE,
		payload,
	};
};

export const setAppState = (payload) => {
	console.log(payload);
	return {
		type: types.SET_APP_STATE,
		payload,
	};
};

export const setAppData = (payload) => {
	console.log(payload);
	return {
		type: types.SET_APP_DATA,
		payload,
	};
};
