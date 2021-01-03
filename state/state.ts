import {AppState} from './types'
import initialEmailState from './email/state'
import initialGlobalState from './global/state'
import initialIdentityState from './identity/state'
import initialPasswordState from './password/state'

const initialState: AppState = {
  app: initialGlobalState,
  email: initialEmailState,
  identity: initialIdentityState,
  password: initialPasswordState,
  success: {name: 'success'},
}

export default initialState
