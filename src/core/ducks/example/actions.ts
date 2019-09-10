import { QUACK, SWIM } from './types'

export const quack = () => ({
  type: QUACK
})

export const swim = (distance: number) => ({
  type: SWIM,
  payload: {
    distance
  }
})
