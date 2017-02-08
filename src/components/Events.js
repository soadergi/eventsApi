import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/EventsActions'
import { httpGet } from '../helpers/helperFunctions'
import { Link } from 'react-router'

class Home extends Component {
  componentWillMount() {
    httpGet("http://api.itboost.org:82/app_dev.php/api/events")
    .then(
      response => {
        const { onEventsResived } = this.props.pageActions;
        onEventsResived(JSON.parse(response));
      },
      error => console.log(error)
    );
  }
  render() {
    const listEventsNames = [];
    if (Object.keys(this.props.allEvents).length) {
      const {items} = this.props.allEvents;
      for (let i=0; i<items.length; i++) {
        listEventsNames.push(
          <li key={items[i].id}>
            <Link to={'events/event_detailed/'+items[i].id}>{items[i].name}</Link>
          </li>
        );
      }
    }

    return (
      <div className='home'>
        <h3>Раздел /events</h3>
        <h2>Все мероприятия</h2>
        <ul>
          {listEventsNames}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { allEvents: state }
}

function mapDispatchToProps(dispatch) {
  return { pageActions: bindActionCreators(pageActions, dispatch) }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Home);
