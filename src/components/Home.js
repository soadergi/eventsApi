import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h3>Раздел /home</h3>
        <h2>Добро пожаловать</h2>
      </div>
    )
  }
}
