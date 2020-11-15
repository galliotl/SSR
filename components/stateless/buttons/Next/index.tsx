import React from 'react'
import {Button} from '@geist-ui/react'
import {ChevronRight} from '@geist-ui/react-icons'
import NextButtonProps from './types'

const Next: React.FunctionComponent<NextButtonProps> = ({onClick, icon, text, loading}) => {
  return (
    <Button
      type="success"
      onClick={onClick}
      disabled={!onClick}
      ghost
      iconRight={icon || <ChevronRight />}
      loading={loading}
    >
      {text || 'Next'}
    </Button>
  )
}

export default Next
