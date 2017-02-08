import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  componentWillMount() {
    fetch('http://api.itboost.org:82/app_dev.php/api/events')
      .then( response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then( data => {
            const { onEventsResived } = this.props.pageActions;
            onEventsResived(data);
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error', err);
      });
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
