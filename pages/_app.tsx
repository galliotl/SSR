import React from 'react'
import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import {useStore} from '@state/store'

import '../styles/globals.css'

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
