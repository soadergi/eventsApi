import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/PageActions'
import { Link } from 'react-router'

class App extends Component {
  render() {
    const { onEventsResived } = this.props.pageActions;
    return (
      <div className='container'>
        <ul>
          <li><Link to='/events'>Events</Link></li>
        </ul>
      </div>
    );
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
)(App);
