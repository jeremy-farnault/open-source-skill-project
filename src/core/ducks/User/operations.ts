import { updateUserIdAction } from './actions'

export interface IUpdateUserIdOperation {
  type: string
  payload: {
    id: string
  }
}

export const updateUserId = (id: string) => (dispatch: (a: IUpdateUserIdOperation) => void) => {
  dispatch(updateUserIdAction(id))
}
