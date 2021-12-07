import { SET_APP_STATE } from '../constants';
import { SET_APP_DATA } from '../constants';
import { getData } from '../../helpers/localStorage';

const initialState = {
	appState: getData('data') || [],
	data: {},
};

export const appComponentReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_APP_STATE:
			return {
				...state,
				appState: action.payload,
			};
		case SET_APP_DATA:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};
