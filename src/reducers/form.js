import { REGISTER_USER } from '../constants/index';

export default function addToken(state = '', action) {
	switch (action.type) {
		case REGISTER_USER:
			return action.payload;

		default:
			return state
	}
}
