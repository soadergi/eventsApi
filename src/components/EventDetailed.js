import React, { Component } from 'react'
import { connect } from 'react-redux'

class Event extends Component {
  render() {
    Event.eventId = this.props.params.id;
    return (
      <div className='events'>
        <div>Раздел /EventDetailed</div>
        <div>Название мероприятия: {this.props.event[this.props.params.id-1].name}</div>
        <div>Дата начала мероприятия: {this.props.event[this.props.params.id-1].eventStartDate}</div>
        <div>Место проведения мероприятия: {this.props.event[this.props.params.id-1].locations[0].place}</div>
        <div>Организатор:
          {' '+this.props.event[this.props.params.id-1].createdBy.firstname}
          {' '+this.props.event[this.props.params.id-1].createdBy.lastname}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return { event: state.items }
}

export default connect(
  mapStateToProps, {}
)(Event);
