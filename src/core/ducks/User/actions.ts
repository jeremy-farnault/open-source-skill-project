import { UPDATE_USER_ID } from './types'

export const updateUserIdAction = (id: string) => ({
  type: UPDATE_USER_ID,
  payload: { id }
})
