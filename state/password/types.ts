import {BaseStepState} from '@state/types'
import {UPDATE_PASSWORD} from './constants'

export type PasswordStepState = BaseStepState & {
  name: 'password'
  password: string
}

/** ACTIONS */
export type UpdatePasswordAction = {
  type: typeof UPDATE_PASSWORD
  value: string
  error?: unknown
}
export type PasswordAction = UpdatePasswordAction
