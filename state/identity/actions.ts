import {UPDATE_IDENTITY} from './constants'
import {IdentityAction} from './types'

export const updateIdentity = (
  firstname: string,
  lastname: string,
  age: number
): IdentityAction => ({
  type: UPDATE_IDENTITY,
  firstname,
  lastname,
  age,
})
