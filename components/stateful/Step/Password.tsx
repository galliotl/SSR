import React, {useCallback, useState} from 'react'
import {getPasswordStepState} from '@state/selectors'
import {sendPassword, goBack} from '@state/password/actionCreator'
import {useDispatch, useSelector} from 'react-redux'

// Components
import Animation from '@components/stateless/Animation'
import {Card, Grid, Input, Text} from '@geist-ui/react'
import Previous from '@components/stateless/buttons/Previous'
import Next from '@components/stateless/buttons/Next'

// Animation
import * as passwordAnimation from '@animations/password.json'

const Password: React.FunctionComponent = () => {
  const dispatch = useDispatch()

  // State
  const {loading, password, journeyType} = useSelector(getPasswordStepState)

  // Fields controller
  const [pwdValue, updatePwd] = useState(password)
  const onPwdChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updatePwd(e.target.value)
  }, [])

  const onNextClick = useCallback(() => {
    dispatch(sendPassword(pwdValue))
  }, [dispatch, pwdValue])

  const onPreviousClick = useCallback(() => {
    dispatch(goBack(journeyType))
  }, [dispatch])

  return (
    <>
      <Card.Content>
        <Animation lotti={passwordAnimation} height={300} width={300} />
        <Input.Password width="100%" value={pwdValue} onChange={onPwdChange}>
          <Text>Password</Text>
        </Input.Password>
      </Card.Content>
      <Card.Footer disableAutoMargin>
        <Grid xs={24} sm={12} justify="center">
          <Previous onClick={onPreviousClick} />
        </Grid>
        <Grid xs={24} sm={12} justify="center">
          <Next loading={loading} onClick={onNextClick} />
        </Grid>
      </Card.Footer>
    </>
  )
}

export default Password
