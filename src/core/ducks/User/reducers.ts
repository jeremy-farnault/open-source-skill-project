import { initialState } from '../../../Interfaces/store'
import { IUpdateUserIdOperation } from './operations'
import { UPDATE_USER_ID } from './types'

const updateUserReducer = (state = initialState.user, action: IUpdateUserIdOperation) => {
  if (action.type === UPDATE_USER_ID) return { ...state, userId: action.payload.id }

  return state
}

export const reducer = updateUserReducer
