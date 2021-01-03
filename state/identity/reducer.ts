import {IdentityAction, IdentityStepState} from './types'
import initialState from './state'

const reducer = (state = initialState, action: IdentityAction): IdentityStepState => {
  switch (action.type) {
    case 'UPDATE_IDENTITY':
      return {
        ...state,
        age: action.age,
        firstName: action.firstname,
        lastName: action.lastname,
      }
    default:
      return state
  }
}
export default reducer
