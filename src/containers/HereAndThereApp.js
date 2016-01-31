import React, { Component } from 'react'
import CitySelect from '../components/citySelect'

export default class App extends Component {
  render() {
    return (
      <CitySelect city='Seattle' />
    )
  }
}
