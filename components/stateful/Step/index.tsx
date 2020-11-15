import React from 'react'
import {useSelector} from 'react-redux'

// State
import {getStepState} from '@state/selectors'

// Components
import {Card, Divider} from '@geist-ui/react'
import Email from './Email'
import Identity from './Identity'
import Password from './Password'
import Success from './Success'
import Stepper from '@components/stateful/Stepper'

const Step: React.FunctionComponent = () => {
  const {name} = useSelector(getStepState)

  let StepComponent
  switch (name) {
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
      throw new Error('unknown name ' + name)
  }

  return (
    <Card>
      <Card.Content>
        <Stepper />
      </Card.Content>
      <Divider />
      <StepComponent />
    </Card>
  )
}

export default Step
