import React, { Component } from 'react';
import { connect } from 'react-redux';

class Event extends Component {
  render() {
    let event = this.props.event;
    let params = this.props.params;
    return (
      <div className='events'>
        <div>Раздел /EventDetailed</div>
        <div>Название мероприятия: {event[params.id-1].name}</div>
        <div>Дата начала мероприятия: {event[params.id-1].eventStartDate}</div>
        <div>Место проведения мероприятия: {event[params.id-1].locations[0].place}</div>
        <div>Организатор:
          {' '+event[params.id-1].createdBy.firstname}
          {' '+event[params.id-1].createdBy.lastname}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return { event: state.events.items }
}

export default connect(
  mapStateToProps, {}
)(Event);
