import { combineReducers } from 'redux';
import changeStore from './app';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  events: changeStore,
  form: formReducer
}

export default combineReducers(reducers)
