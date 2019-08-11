import { quack } from './actions'

// This is a link to an action defined in actions.js.
export const simpleQuack = quack

// This is a thunk which dispatches multiple actions from actions.js
// export const complexQuack = (distance: number) => dispatch => {
//   dispatch(quack()).then(() => {
//     dispatch(swim(distance))
//     dispatch(/* any action */)
//   })
// }
