import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Events extends Component {
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
  return { allEvents: state.events }
}

export default connect(
  mapStateToProps, {}
)(Events);
