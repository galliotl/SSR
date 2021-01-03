import {UPDATE_JOUREY, UPDATE_LOADING, UPDATE_STEP} from './constants'
import {GlobalAction, GlobalState} from './types'
import initialState from './state'

const reducer = (state = initialState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case UPDATE_STEP:
      return {
        ...state,
        step: action.step,
        loading: false,
      }

    case UPDATE_JOUREY:
      return {
        ...state,
        journeyType: action.journeyType,
      }

    case UPDATE_LOADING:
      return {
        ...state,
        loading: action.loading,
      }
    default:
      return state
  }
}
export default reducer
