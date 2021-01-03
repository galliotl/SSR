import React from 'react'
import Container from '@components/stateless/Container'
import FullHeight from '@components/stateless/FullHeight'

const Reset: React.FC = () => {
  return (
    <FullHeight>
      <Container>
        <h1>Outdated password request, please try again</h1>
      </Container>
    </FullHeight>
  )
}

export default Reset
