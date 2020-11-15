import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllState} from '@state/selectors'
import {sendPassword} from '@state/password/actionCreator'

// Components
import Animation from '@components/stateless/Animation'
import {Card, Grid, Input, Text} from '@geist-ui/react'
import {Lock} from '@geist-ui/react-icons'
import Previous from '@components/stateless/buttons/Previous'
import Next from '@components/stateless/buttons/Next'

// Animation
import * as passwordAnimation from '@animations/password.json'

const Password: React.FunctionComponent = () => {
  console.log('called')
  const dispatch = useDispatch()

  const {app, password} = useSelector(getAllState)
  const {error, value} = password

  const isHidden = useState(true)

  // Fields controller
  const [pwdValue, updatePwd] = useState(value || '')
  const onPwdChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updatePwd(e.target.value)
  }, [])

  const onClick = useCallback(() => {
    dispatch(sendPassword(pwdValue))
  }, [dispatch])
  return (
    <>
      <Card.Content>
        <Animation lotti={passwordAnimation} height={300} width={300} />
        <Input
          width="100%"
          type={isHidden ? 'password' : 'text'}
          value={pwdValue}
          onChange={onPwdChange}
          iconRight={<Lock />}
        >
          <Text>Password</Text>
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

export default Password
