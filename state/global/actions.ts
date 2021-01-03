import {UPDATE_JOUREY, UPDATE_LOADING, UPDATE_STEP} from './constants'
import {UpdateStepAction, UpdateLoadingAction, JourneyType, UpdateJourneyTypeAction} from './types'
import {Step} from '@state/types'

const setStepToPassword = (): UpdateStepAction => ({
  type: UPDATE_STEP,
  step: 'password',
})

const setStepToEmail = (): UpdateStepAction => ({
  type: UPDATE_STEP,
  step: 'email',
})

const setStepToIdentity = (): UpdateStepAction => ({
  type: UPDATE_STEP,
  step: 'identity',
})

export const updateStep = (step: Step): UpdateStepAction => {
  switch (step) {
    case 'password': {
      return setStepToPassword()
    }
    case 'email': {
      return setStepToEmail()
    }
    case 'identity': {
      return setStepToIdentity()
    }
    default: {
      return setStepToEmail()
    }
  }
}

export const updateLoading = (isLoading: boolean): UpdateLoadingAction => ({
  type: UPDATE_LOADING,
  loading: isLoading,
})

export const updateJourneyType = (journey: JourneyType): UpdateJourneyTypeAction => ({
  type: UPDATE_JOUREY,
  journeyType: journey,
})
