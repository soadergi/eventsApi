import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as formActions from '../actions/FormActions';
import { bindActionCreators } from 'redux';
import RegistrationForm from '../forms/RegistrationForm';

class Home extends Component {
  render() {
    const Registration = (token) => {
      if (token.length) {
        return (
          <div>
            <h2>Wellcome</h2>
            <span>Your token:<br/><br/>
              {token}
            </span>
          </div>
        )
      } else {
        return (
          <div>
            <h3>Please, sign in</h3>
            <RegistrationForm
              onUserRegistration={this.props.formActions.onUserRegistration}
              />
          </div>
        )
      }
    };
    return (
      <div className='home'>
        <h3>Раздел /home</h3>
        {Registration(this.props.token)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.token
  }
}

function mapDispatchToProps(dispatch) {
  return { formActions: bindActionCreators(formActions, dispatch) }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Home);
