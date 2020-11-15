import {AppState, StepState} from '@state/types'

export const getStepState = (state: AppState): StepState => state[state.app.step]
export const getAllState = (state: AppState): AppState => state
