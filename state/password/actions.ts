import {UPDATE_PASSWORD} from './constants'
import {UpdatePasswordAction} from './types'

export const updatePassword = (password: string): UpdatePasswordAction => ({
  type: UPDATE_PASSWORD,
  value: password,
})
