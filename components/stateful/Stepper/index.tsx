import React from 'react'
import {Breadcrumbs} from '@geist-ui/react'
import {useSelector} from 'react-redux'
import {getStepState} from '@state/selectors'

const Stepper = (): JSX.Element => {
  const {previousPath, name} = useSelector(getStepState)

  return (
    <Breadcrumbs>
      <Breadcrumbs.Item>Authentication</Breadcrumbs.Item>
      {previousPath?.split('/').map((previousPathElement: string) => (
        <Breadcrumbs.Item key={previousPathElement}>{previousPathElement}</Breadcrumbs.Item>
      ))}
      <Breadcrumbs.Item>{name}</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}

export default Stepper
