import React from 'react'
import {Card} from '@geist-ui/react'
import Animation from '@components/stateless/Animation'

// Animation
import * as success from '@animations/success.json'

const Success: React.FunctionComponent = () => (
  <Card.Content>
    <Animation lotti={success} height={300} width={300} />
  </Card.Content>
)

export default Success
