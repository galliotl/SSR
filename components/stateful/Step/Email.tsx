import React, {useCallback, useEffect, useState} from 'react'
import {checkEmailFormat} from '@modules/form/validators'
import {getEmailStepState} from '@state/selectors'
import {sendEmail} from '@state/email/actionsCreator'
import {useDispatch, useSelector} from 'react-redux'
import {getLoginStatus} from '@galliotl/authsdk'

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

  // State
  const {loading, email} = useSelector(getEmailStepState)
  const [error, updateError] = useState('')

  useEffect(() => {
    getLoginStatus().then(loginStatus => {
      console.log(loginStatus)
    })
  }, [])

  // Fields controllers
  const [emailValue, updateEmail] = useState(email)
  const onEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateEmail(e.target.value)
  }, [])

  const onClick = useCallback(() => {
    if (checkEmailFormat(emailValue)) {
      dispatch(sendEmail(emailValue))
    } else {
      updateError('Wrong email format')
    }
  }, [dispatch, emailValue])

  return (
    <>
      <Card.Content>
        <Animation lotti={animation} width={300} height={300} />
        <Input
          width="100%"
          value={emailValue}
          onChange={onEmailChange}
          status={error ? 'error' : 'default'}
          type="mail"
          iconRight={<Mail />}
        >
          <Text>Email</Text>
        </Input>
      </Card.Content>
      <Card.Footer disableAutoMargin>
        <Grid xs={24} sm={12} justify="center" style={{display: 'flex'}}>
          <Previous disabled />
        </Grid>
        <Grid xs={24} sm={12} justify="center" style={{display: 'flex'}}>
          <Next loading={loading} onClick={onClick} />
        </Grid>
      </Card.Footer>
    </>
  )
}

export default Email
