import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/HomeActions'
import { httpGet } from '../helpers/helperFunctions'

class Home extends Component {
  componentWillMount() {
    httpGet("http://api.itboost.org:82/app_dev.php/api/events")
    .then(
      response => {
        const { onEventsResived } = this.props.pageActions;
        const parsedResponse = JSON.parse(response);
        onEventsResived(parsedResponse);
      },
      error => console.log(error)
    );
  }
  render() {
    const {items} = this.props.allEvents;
    console.log({items});
    return (
      <div className='home'>
        <div>Раздел /home</div>
        {items}
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
