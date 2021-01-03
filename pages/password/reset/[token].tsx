import React from 'react'
import Container from '@components/stateless/Container'
import FullHeight from '@components/stateless/FullHeight'
import {useRouter} from 'next/router'

const Reset: React.FC = () => {
  const router = useRouter()
  const {token} = router.query
  return (
    <FullHeight>
      <Container>
        <h1>Coming soon {token}</h1>
      </Container>
    </FullHeight>
  )
}

export default Reset
