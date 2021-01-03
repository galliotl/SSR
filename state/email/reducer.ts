import {EmailAction, EmailStepState} from './types'
import initialState from './state'
import {UPDATE_EMAIL} from './constants'

const reducer = (state = initialState, action: EmailAction): EmailStepState => {
  switch (action.type) {
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.value,
      }
    default:
      return state
  }
}
export default reducer
