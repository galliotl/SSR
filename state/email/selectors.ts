import {AppState} from '@state/types'
import {EmailStepState} from './types'

export const getEmailStepState = (state: AppState): EmailStepState => state.email
