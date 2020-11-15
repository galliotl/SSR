import {Action} from 'redux'
import {Step} from '@state/types'
import {UPDATE_STEP, UPDATE_LOADING} from './constants'

/** STATE */
export interface GlobalState {
  step: Step
  loading: boolean
}

/** ACTIONS */
export interface UpdateStepAction extends Action {
  type: typeof UPDATE_STEP
  step: Step
}

export interface UpdateLoadingAction extends Action {
  type: typeof UPDATE_LOADING
  loading: boolean
}

export type GlobalAction = UpdateStepAction | UpdateLoadingAction
