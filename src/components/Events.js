import React, { Component } from 'react'
import { httpGet } from '../helpers/helperFunctions'

export default class Events extends Component {
  componentWillMount() {
    httpGet("http://api.itboost.org:82/app_dev.php/api/events")
      .then(
        response => console.log(response),
        //onEventsResived(response),
        error => console.log(error)
      );
      setTimeout( (() => console.log(Events.events)), 3000);
      console.log(this.props.allEvents);
  }
  render() {
    console.log(this.props.allEvents);
    return (
      <div className='events'>
        <div>Раздел /events</div>
        {console.log(this.props.allEvents)}
      </div>
    )
  }
}

import { GET_ALL_EVENTS } from '../constants/index'
export function onEventsResived(response) {
  return {
    type: GET_ALL_EVENTS,
    payload: response
  }
}
