import {IdentityStepState} from './types'

const initialIdentityState: IdentityStepState = {
  name: 'identity',
  firstName: {
    value: '',
  },
  lastName: {
    value: '',
  },
  age: {
    value: 0,
  },
}
export default initialIdentityState
