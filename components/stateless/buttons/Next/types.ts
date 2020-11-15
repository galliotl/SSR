import {Icon} from '@geist-ui/react-icons'

type NextButtonProps = {
  icon?: Icon
  loading: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  text?: string
}

export default NextButtonProps
