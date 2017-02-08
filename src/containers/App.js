import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { Link } from 'react-router'

class App extends Component {
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
  return { allEvents: state }
}

export default connect(
  mapStateToProps, {}
)(App);
