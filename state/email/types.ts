import {StepState, StepStates} from '@state/types'
import {UPDATE_EMAIL} from './constants'

export interface EmailStepState extends StepState {
  name: 'email'
  error: unknown
  value?: string
}

/** ACTIONS */
export type UpdateEmailAction = {
  type: typeof UPDATE_EMAIL
  value: string
}

export type EmailAction = UpdateEmailAction

/** GUARDS */
export const isEmailState = (state: StepStates): state is EmailStepState => {
  return (state as EmailStepState).name === 'email'
}
