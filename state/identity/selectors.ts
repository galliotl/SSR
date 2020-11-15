import {AppState} from '@state/types'
import {IdentityStepState} from './types'

export const getIdentityStepState = (state: AppState): IdentityStepState => state.identity
