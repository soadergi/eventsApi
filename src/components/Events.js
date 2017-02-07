import React, { Component } from 'react'
import { httpGet } from '../helpers/helperFunctions'

export default class Events extends Component {
  componentWillMount() {
    console.log('component will mount');
    httpGet("http://api.itboost.org:82/app_dev.php/api/events")
      .then(
        response => console.log(response),
        //onEventsResived(response),
        error => console.log(error)
      );
  }
  render() {
    return (
      <div className='events'>
        <div>Раздел /events</div>
      </div>
    )
  }
}
