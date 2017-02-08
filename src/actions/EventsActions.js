import { GET_ALL_EVENTS } from '../constants/index'

export function onEventsResived(response) {
  return {
    type: GET_ALL_EVENTS,
    payload: response
  }
}
