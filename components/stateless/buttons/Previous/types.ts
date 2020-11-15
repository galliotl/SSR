import {Icon} from '@geist-ui/react-icons'

type PreviousButtonProps = {
  disabled?: boolean
  icon?: Icon
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  text?: string
}

export default PreviousButtonProps
