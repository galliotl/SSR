import React from 'react'
import Head from 'next/head'

import Container from '@components/stateless/Container'
import FullHeight from '@components/stateless/FullHeight'
import Step from '@components/stateful/Step'

export default function Login(): JSX.Element {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <FullHeight>
          <Step />
        </FullHeight>
      </Container>
    </>
  )
}
