import * as types from '../constants/actionTypes'

// import fetch from 'isomorphic-fetch'

export function selectCity(city) {
  return {
    type: types.SELECT_CITY,
    city
  }
}
