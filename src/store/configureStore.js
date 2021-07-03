import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
	requests: [],
	ongoingFilter: false,
	methodList: ['밀링', '선반'],
	methodFilter: [],
	materialList: ['알루미늄', '탄소강', '구리', '합금강', '강철'],
	materialFilter: [],
};
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INIT':
			return {
				...state,
				requests: action.data,
			};
		case 'CHANGE_ONGOING_FILTER_STATUS':
			return {
				...state,
				ongoingFilter: action.data,
			};
		case 'RESET':
			return {
				...state,
				methodFilter: [],
				materialFilter: [],
			};
		case 'ADD_TO_MATERIAL_FILTER':
			return {
				...state,
				materialFilter: [...state.materialFilter, action.data],
			};
		case 'REMOVE_FROM_MATERIAL_FILTER':
			return {
				...state,
				materialFilter: state.materialFilter.filter(el => el !== action.data),
			};
		case 'ADD_TO_METHOD_FILTER':
			return {
				...state,
				methodFilter: [...state.methodFilter, action.data],
			};
		case 'REMOVE_FROM_METHOD_FILTER':
			return {
				...state,
				methodFilter: state.methodFilter.filter(el => el !== action.data),
			};

		default: {
			return state;
		}
	}
};

const store = createStore(rootReducer, composeWithDevTools());

export default store;
