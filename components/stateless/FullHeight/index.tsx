import React from 'react'

interface FullHeightProps {
  children: React.ReactNode
}

const FullHeight = ({children}: FullHeightProps): JSX.Element => {
  return (
    <div className="wrapper">
      {children}
      <style jsx>{`
        .wrapper {
          display: flex;
          height: 100vh;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}

export default FullHeight
