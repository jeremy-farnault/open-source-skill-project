import { combineReducers } from 'redux'
import { QUACK, SWIM } from './types'

/* State Shape
{
    quacking: bool,
    distance: number
}
*/

const quackReducer = (state = false, action: { type: string }) => {
  switch (action.type) {
    case QUACK:
      return true
    /* ... */
    default:
      return state
  }
}

const distanceReducer = (state = 0, action: { type: string; payload: { distance: number } }) => {
  switch (action.type) {
    case SWIM:
      return state + action.payload.distance
    /* ... */
    default:
      return state
  }
}

export const reducer = combineReducers({
  quacking: quackReducer,
  distance: distanceReducer
})
