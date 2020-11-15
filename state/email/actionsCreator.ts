import {checkEmail} from '@modules/email'
import {updateEmail} from './actions'
import {updateLoading, updateStep} from '@state/global/actions'
import {AppThunk} from '@state/types'

export const sendEmail = (email: string): AppThunk<Promise<void>> => async dispatch => {
  dispatch(updateLoading(true))
  const isValid = await checkEmail(email)
  if (isValid) {
    dispatch(updateEmail(email))
    dispatch(updateLoading(false))
    dispatch(updateStep('identity'))
  } else {
    dispatch(updateLoading(false))
  }
}
