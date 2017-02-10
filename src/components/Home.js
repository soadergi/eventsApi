import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegistrationForm from '../forms/RegistrationForm';
import * as formActions from '../actions/FormActions'
import { bindActionCreators } from 'redux'

class Home extends Component {
  render() {
    function handleSubmit(event) {
      // values.preventDefault();
      // console.log(values)
    }

    return (
      <div className='home'>
        <h3>Раздел /home</h3>
        <h2>Добро пожаловать</h2>
        <RegistrationForm
          handleSubmit={handleSubmit}
          onUserRegistration={this.props.formActions.onUserRegistration}
        />
        {console.log(this.props.form)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {form: state.form}
}

function mapDispatchToProps(dispatch) {
  return { formActions: bindActionCreators(formActions, dispatch) }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Home);
