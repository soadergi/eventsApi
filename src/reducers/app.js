import { GET_ALL_EVENTS } from '../constants/index';

export default function eventsReducer (state = {}, action) {
	switch (action.type) {
		case GET_ALL_EVENTS:
			return {...action.payload};

		default:
			return state
	}
}
