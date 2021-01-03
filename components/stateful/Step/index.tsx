import React from 'react'
import {getGlobalState} from '@state/global/selectors'
import {useSelector} from 'react-redux'
import {ucfirst} from '@modules/utils/typography'

// Components
import {Card, Text} from '@geist-ui/react'
import Email from './Email'
import Identity from './Identity'
import Password from './Password'
import Success from './Success'

const Step: React.FunctionComponent = () => {
  const {step, journeyType} = useSelector(getGlobalState)

  let StepComponent
  switch (step) {
    case 'email':
      StepComponent = Email
      break
    case 'identity':
      StepComponent = Identity
      break
    case 'password':
      StepComponent = Password
      break
    case 'success':
      StepComponent = Success
      break
    default:
      throw new Error('unknown name ' + step)
  }

  return (
    <Card shadow>
      <Text h1>{ucfirst(journeyType || 'Login or Register')}</Text>
      <StepComponent />
    </Card>
  )
}

export default Step
