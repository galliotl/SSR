import {AppState} from '@state/types'
import {PasswordStepState} from './types'

export const getPasswordStepState = (state: AppState): PasswordStepState => state.password
