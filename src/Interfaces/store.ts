export interface IReduxState {
  user: IUserData
}

export interface IUserData {
  userId: string
}

const initialStateUser = {
  userId: ''
}

export const initialState: IReduxState = {
  user: initialStateUser
}
