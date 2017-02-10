import { REGISTER_USER } from '../constants/index';

export function onUserRegistration(response) {
  return {
    type: REGISTER_USER,
    payload: response
  }
}
