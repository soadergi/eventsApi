import { combineReducers } from 'redux';
import eventsReducer from './app';
import addToken from './form';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  events: eventsReducer,
  form: formReducer,
  token: addToken
}

export default combineReducers(reducers)
