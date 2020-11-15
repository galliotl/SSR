import React from 'react'
import Lottie, {Options} from 'react-lottie'
import AnimationProps from './types'

const Animation: React.FunctionComponent<AnimationProps> = ({lotti, width, height}) => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: lotti.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  )
}
export default Animation
