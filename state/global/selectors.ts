import {AppState} from '@state/types'
import {GlobalState} from './types'

export const getGlobalState = (state: AppState): GlobalState => state.app
