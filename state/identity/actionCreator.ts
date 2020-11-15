import {updateStep} from '@state/global/actions'
import {AppThunk} from '@state/types'
import {updateIdentity} from './actions'

export const sendIdentity = (
  firstname: string,
  lastname: string,
  age: number
): AppThunk<void> => dispatch => {
  dispatch(updateIdentity(firstname, lastname, age))
  console.log('hehe')
  dispatch(updateStep('password'))
}
