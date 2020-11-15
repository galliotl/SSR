import {AppState, AppAction} from './types'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore, applyMiddleware, Store, combineReducers} from 'redux'
import {useMemo} from 'react'
import emailReducer from './email/reducer'
import globalReducer from './global/reducer'
import passwordReducer from './password/reducer'
import identityReducer from './identity/reducer'
import thunkMiddleware from 'redux-thunk'

let store: Store<AppState, AppAction> | undefined

const initStore = (initialState: AppState): Store<AppState, AppAction> => {
  return createStore(
    combineReducers({
      app: globalReducer,
      email: emailReducer,
      identity: identityReducer,
      password: passwordReducer,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

const initializeStore = (preloadedState: AppState): Store<AppState, AppAction> => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export const useStore = (initialState: AppState): Store<AppState, AppAction> => {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
