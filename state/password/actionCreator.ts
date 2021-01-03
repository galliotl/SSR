import {updateLoading, updateStep} from '@state/global/actions'
import {JourneyType} from '@state/global/types'
import {AppThunk} from '@state/types'
import {updatePassword} from './actions'

export const sendPassword = (password: string): AppThunk<Promise<void>> => async dispatch => {
  dispatch(updateLoading(true))
  dispatch(updatePassword(password))
  dispatch(updateLoading(false))
  dispatch(updateStep('success'))
}

export const goBack = (journey: JourneyType): AppThunk<void> => dispatch => {
  switch (journey) {
    case 'login': {
      dispatch(updateStep('email'))
      break
    }
    case 'register': {
      dispatch(updateStep('identity'))
      break
    }
    default:
      dispatch(updateStep('email'))
  }
}
