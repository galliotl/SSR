import {IdentityAction, IdentityStepState} from './types'
import initialState from './state'

const reducer = (state = initialState, action: IdentityAction): IdentityStepState => {
  switch (action.type) {
    case 'UPDATE_IDENTITY':
      return {
        ...state,
        age: {
          value: action.age,
        },
        firstName: {
          value: action.firstname,
        },
        lastName: {
          value: action.lastname,
        },
      }
    default:
      return state
  }
}
export default reducer
