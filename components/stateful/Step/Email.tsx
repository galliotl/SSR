import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllState} from '@state/selectors'
import {sendEmail} from '@state/email/actionsCreator'

// Components
import {Card, Grid, Input, Text} from '@geist-ui/react'
import {Mail} from '@geist-ui/react-icons'
import Animation from '@components/stateless/Animation'
import Next from '@components/stateless/buttons/Next'
import Previous from '@components/stateless/buttons/Previous'

// Animation
import * as animation from '@animations/email.json'

const Email: React.FunctionComponent = () => {
  const dispatch = useDispatch()

  const {app, email} = useSelector(getAllState)
  const {error, value} = email

  // Fields controllers
  const [emailValue, updateEmail] = useState(value || '')
  const onEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateEmail(e.target.value)
  }, [])

  const onClick = useCallback(() => {
    dispatch(sendEmail(emailValue))
  }, [dispatch])

  return (
    <>
      <Card.Content>
        <Animation lotti={animation} width={300} height={300} />
        <Input
          width="100%"
          value={emailValue}
          onChange={onEmailChange}
          status={error && 'error'}
          type="mail"
          iconRight={<Mail />}
        >
          <Text>Email</Text>
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

export default Email
