import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllState} from '@state/selectors'
import {sendIdentity} from '@state/identity/actionCreator'

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
  const {app, identity} = useSelector(getAllState)
  const {firstName, lastName, age} = identity

  // Fields controllers
  const [firstnameValue, updateFirstname] = useState(firstName.value || '')
  const onFirstnameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateFirstname(e.target.value)
  }, [])

  const [lastnameValue, updateLastname] = useState(lastName.value || '')
  const onLastnameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateLastname(e.target.value)
  }, [])

  const [ageValue, updateAge] = useState(age.value || 0)
  const onAgeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateAge(parseInt(e.target.value))
  }, [])

  const onClick = useCallback(() => {
    console.log('clicked')
    dispatch(sendIdentity(firstnameValue, lastnameValue, ageValue))
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
          <Previous />
        </Grid>
        <Grid xs={24} sm={12} justify="center" style={{display: 'flex'}}>
          <Next loading={app.loading} onClick={onClick} />
        </Grid>
      </Card.Footer>
    </>
  )
}

export default Identity
