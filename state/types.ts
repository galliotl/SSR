import {EmailAction, EmailStepState} from './email/types'
import {GlobalAction, GlobalState} from './global/types'
import {IdentityAction, IdentityStepState} from './identity/types'
import {PasswordAction, PasswordStepState} from './password/types'
import {ThunkAction} from 'redux-thunk'

/* COMMON */
export type Step = 'email' | 'password' | 'identity' | 'success'
export type BaseStepState = {
  name: Step
  previousPath?: string
}

/** STATE */
export type AppState = {
  app: GlobalState
  email: EmailStepState
  identity: IdentityStepState
  password: PasswordStepState
  success: BaseStepState
}

/** ACTIONS */
export type AppAction = GlobalAction | EmailAction | PasswordAction | IdentityAction
export type AppThunk<R> = ThunkAction<R, AppState, null, AppAction>
