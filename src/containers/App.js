import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/PageActions'
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/events'>Events</Link></li>
          <li><Link to='/events_full'>Events Full</Link></li>
        </ul>
        {this.props.children}
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
