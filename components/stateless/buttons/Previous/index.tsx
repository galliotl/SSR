import React from 'react'
import PreviousButtonProps from './types'

// Components
import {ChevronLeft} from '@geist-ui/react-icons'
import {Button} from '@geist-ui/react'

const Previous: React.FunctionComponent<PreviousButtonProps> = ({
  icon,
  onClick,
  text,
  disabled,
}) => {
  return (
    <Button disabled={disabled} icon={icon || <ChevronLeft />} onClick={onClick} type="abort">
      {text || Previous}
    </Button>
  )
}
export default Previous
