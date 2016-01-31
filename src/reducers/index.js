import * as types from '../constants/actionTypes'
import initialState from '../constants/initialState'

export function city (state = initialState, action) {
  switch (action.type) {
    case types.SELECT_CITY:
      return {
        ...state,
        city: action.city
      }
    default:
      return state;
  }
}
