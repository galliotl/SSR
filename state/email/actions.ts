import {UPDATE_EMAIL} from './constants'
import {UpdateEmailAction} from './types'

export const updateEmail = (email: string): UpdateEmailAction => ({
  type: UPDATE_EMAIL,
  value: email,
})
