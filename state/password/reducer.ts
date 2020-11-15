import {PasswordAction, PasswordStepState} from './types'
import initialState from './state'

const reducer = (state = initialState, action: PasswordAction): PasswordStepState => {
  switch (action.type) {
    default:
      return state
  }
}
export default reducer
