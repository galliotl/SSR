import {updateLoading, updateStep} from '@state/global/actions'
import {AppThunk} from '@state/types'
import {updatePassword} from './actions'

export const sendPassword = (password: string): AppThunk<Promise<void>> => async dispatch => {
  dispatch(updateLoading(true))
  dispatch(updatePassword(password))
  dispatch(updateLoading(false))
  dispatch(updateStep('success'))
}
