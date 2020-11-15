import {StepState, StepStates} from '@state/types'
import {UPDATE_PASSWORD} from './constants'

export interface PasswordStepState extends StepState {
  name: 'password'
  error?: unknown
  value: string
}

/** ACTIONS */
export type UpdatePasswordAction = {
  type: typeof UPDATE_PASSWORD
  value: string
  error?: unknown
}
export type PasswordAction = UpdatePasswordAction

/** GUARDS */
export const isPasswordState = (state: StepStates): state is PasswordStepState => {
  return (state as PasswordStepState).name === 'password'
}
