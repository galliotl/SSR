import {AppState} from '@state/types'
import {EmailStepState} from './email/types'
import {GlobalState} from './global/types'
import {IdentityStepState} from './identity/types'
import {PasswordStepState} from './password/types'

/* STEP STATES */
export const getEmailStepState = (state: AppState): EmailStepState & GlobalState => ({
  ...state.app,
  ...state.email,
})
export const getPasswordStepState = (state: AppState): PasswordStepState & GlobalState => ({
  ...state.app,
  ...state.password,
})
export const getIdentityStepState = (state: AppState): IdentityStepState & GlobalState => ({
  ...state.app,
  ...state.identity,
})

/* USEFUL SHORTHANDS */
export const getRegisterPayload = (state: AppState): Record<string, string> => ({
  email: state.email.email || '',
  password: state.password.password || '',
})
