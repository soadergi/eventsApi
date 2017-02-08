import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { httpGet } from '../helpers/helperFunctions'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/PageActions'

class App extends Component {
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
    return (
      <div className='container'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/events'>Events</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return { pageActions: bindActionCreators(pageActions, dispatch) }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
