import { combineReducers } from 'redux'
import changeStore from './app'
import changeFormStore from './forms'

export default combineReducers({
  changeStore,
  changeFormStore
})
