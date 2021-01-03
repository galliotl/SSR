import React, {useCallback, useState} from 'react'
import {getIdentityStepState} from '@state/selectors'
import {goBack, sendIdentity} from '@state/identity/actionCreator'
import {useDispatch, useSelector} from 'react-redux'

// Components
import {Card, Grid, Input, Text} from '@geist-ui/react'
import {User} from '@geist-ui/react-icons'
import Previous from '@components/stateless/buttons/Previous'
import Next from '@components/stateless/buttons/Next'
import Animation from '@components/stateless/Animation'

// Animation
import * as identityAnimation from '@animations/identity.json'

const Identity: React.FunctionComponent = () => {
  const dispatch = useDispatch()

  // State
  const {loading, firstName, lastName, age} = useSelector(getIdentityStepState)

  // Fields controllers
  const [firstnameValue, updateFirstname] = useState(firstName)
  const onFirstnameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateFirstname(e.target.value)
  }, [])

  const [lastnameValue, updateLastname] = useState(lastName)
  const onLastnameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateLastname(e.target.value)
  }, [])

  const [ageValue, updateAge] = useState(age)
  const onAgeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateAge(parseInt(e.target.value))
  }, [])

  const onNextClick = useCallback(() => {
    dispatch(sendIdentity(firstnameValue, lastnameValue, ageValue))
  }, [dispatch, firstnameValue, lastnameValue, ageValue])

  const onPreviousClick = useCallback(() => {
    dispatch(goBack())
  }, [dispatch])

  return (
    <>
      <Card.Content>
        <Animation lotti={identityAnimation} height={300} width={300} />
        <Input
          width="100%"
          onChange={onFirstnameChange}
          value={firstnameValue}
          type="text"
          iconRight={<User />}
        >
          <Text>Firstname</Text>
        </Input>
        <Input
          width="100%"
          onChange={onLastnameChange}
          value={lastnameValue}
          type="text"
          iconRight={<User />}
        >
          <Text>Name</Text>
        </Input>
        <Input onChange={onAgeChange} value={ageValue.toString()} type="number">
          <Text>Age</Text>
        </Input>
      </Card.Content>
      <Card.Footer disableAutoMargin>
        <Grid xs={24} sm={12} justify="center" style={{display: 'flex'}}>
          <Previous onClick={onPreviousClick} />
        </Grid>
        <Grid xs={24} sm={12} justify="center" style={{display: 'flex'}}>
          <Next loading={loading} onClick={onNextClick} />
        </Grid>
      </Card.Footer>
    </>
  )
}

export default Identity
