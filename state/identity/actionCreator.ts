import {updateStep} from '@state/global/actions'
import {AppThunk} from '@state/types'
import {updateIdentity} from './actions'

export const sendIdentity = (
  firstname: string,
  lastname: string,
  age: number
): AppThunk<void> => dispatch => {
  dispatch(updateIdentity(firstname, lastname, age))
  dispatch(updateStep('password'))
}

export const goBack = (): AppThunk<void> => dispatch => {
  dispatch(updateStep('email'))
}
