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
		case 'CHANGE_FILTER':
			const { category, filter } = action.data;
			if (category === '가공 방식') {
				return {
					...state,
					methodFilter: filter,
				};
			} else {
				return {
					...state,
					materialFilter: filter,
				};
			}

		default: {
			return state;
		}
	}
};

const store = createStore(rootReducer, composeWithDevTools());

export default store;
