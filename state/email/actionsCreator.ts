import {updateEmail} from './actions'
import {updateJourneyType, updateLoading, updateStep} from '@state/global/actions'
import {AppThunk} from '@state/types'
import {checkEmailFormat} from '@modules/form/validators'
import {userExists} from '@modules/api/auth'

export const sendEmail = (email: string): AppThunk<Promise<void>> => async dispatch => {
  dispatch(updateLoading(true))

  if (checkEmailFormat(email)) {
    dispatch(updateEmail(email))

    try {
      await userExists(email)
      dispatch(updateJourneyType('login'))
      dispatch(updateStep('password'))
    } catch {
      dispatch(updateJourneyType('register'))
      dispatch(updateStep('identity'))
    }
  }
  dispatch(updateLoading(false))
}
