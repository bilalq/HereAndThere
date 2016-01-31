import React, { Component } from 'react'
import { selectCity } from '../actions/city'
import { connect } from 'react-redux'

@connect(state => ({
  city: state.city
}))
export default class CitySelect extends Component {
  render() {
    const { city, dispatch } = this.props
    return (
      <p>{ city } </p>
    )
  }
}
