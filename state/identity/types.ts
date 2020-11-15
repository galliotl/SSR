import {StepState, StepStates} from '@state/types'
import {UPDATE_IDENTITY} from './constants'

export interface IdentityStepState extends StepState {
  name: 'identity'
  firstName: {
    value: string
    error?: unknown
  }
  lastName: {
    value: string
    error?: unknown
  }
  age: {
    value: number
    error?: unknown
  }
}

export type UpdateIdentity = {
  type: typeof UPDATE_IDENTITY
  age: number
  firstname: string
  lastname: string
}

export type IdentityAction = UpdateIdentity

/** GUARDS */
export const isIdentityState = (state: StepStates): state is IdentityStepState => {
  return (state as IdentityStepState).name === 'identity'
}
