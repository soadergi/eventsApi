import { REGISTER_USER } from '../constants/index';

export function onUserRegistration(token) {
  return {type: REGISTER_USER, payload: token}
}
