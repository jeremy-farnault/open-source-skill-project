import { createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { IReduxState } from '../Interfaces/store'
import { rootReducer } from './ducks'

export function configureStore(initialState: IReduxState): Store<IReduxState> {
  const composeEnhancers = composeWithDevTools({})

  return createStore(rootReducer, initialState, composeEnhancers())
}
