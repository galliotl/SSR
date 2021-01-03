import {PasswordAction, PasswordStepState} from './types'
import initialState from './state'
import {UPDATE_PASSWORD} from './constants'

const reducer = (state = initialState, action: PasswordAction): PasswordStepState => {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.value,
      }
    default:
      return state
  }
}
export default reducer
