import {Step} from '@state/types'
import {UPDATE_STEP, UPDATE_LOADING, UPDATE_JOUREY} from './constants'

/** STATE */
export type JourneyType = 'login' | 'register' | ''
export type GlobalState = {
  step: Step
  loading: boolean
  journeyType: JourneyType
}

/** ACTIONS */
export type UpdateStepAction = {
  type: typeof UPDATE_STEP
  step: Step
}

export type UpdateJourneyTypeAction = {
  type: typeof UPDATE_JOUREY
  journeyType: JourneyType
}

export type UpdateLoadingAction = {
  type: typeof UPDATE_LOADING
  loading: boolean
}

export type GlobalAction = UpdateStepAction | UpdateLoadingAction | UpdateJourneyTypeAction
