import {BaseStepState} from '@state/types'
import {UPDATE_EMAIL} from './constants'

export type EmailStepState = BaseStepState & {
  name: 'email'
  email: string
}

/** ACTIONS */
export type UpdateEmailAction = {
  type: typeof UPDATE_EMAIL
  value: string
}

export type EmailAction = UpdateEmailAction
