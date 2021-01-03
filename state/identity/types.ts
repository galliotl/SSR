import {BaseStepState} from '@state/types'
import {UPDATE_IDENTITY} from './constants'

export type IdentityStepState = BaseStepState & {
  name: 'identity'
  firstName: string
  lastName: string
  age: number
}

export type UpdateIdentity = {
  type: typeof UPDATE_IDENTITY
  age: number
  firstname: string
  lastname: string
}

export type IdentityAction = UpdateIdentity
