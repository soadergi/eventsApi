import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../actions/PageActions';

class App extends Component {
  componentWillMount() {
    const token = this.props.token;
    fetch('http://api.itboost.org:82/app_dev.php/api/events',
      {method:"GET", headers:{Authorization:'Bearer '+token}})
    .then( response => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: '+
        response.status);
        return;
      }
      response.json().then( data => {
        const { onEventsResived } = this.props.pageActions;
        onEventsResived(data);
      });
    })
    .catch(function(err) {
      console.log('Fetch Error', err);
    });
  }
  render() {
    return (
      <div className='container'>
        <ul>
          <li><Link to='/' activeClassName="active">Home</Link></li>
          <li><Link to='/events' activeClassName="active">Events</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {token: state.token}
}

function mapDispatchToProps(dispatch) {
  return { pageActions: bindActionCreators(pageActions, dispatch) }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
