import { combineReducers } from 'redux'
import { reducer as user } from './User/reducers'

export const rootReducer = combineReducers({
  user
})
