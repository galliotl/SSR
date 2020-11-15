import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({children}: ContainerProps): JSX.Element => {
  return (
    <div className="container">
      {children}
      <style jsx>
        {`
          .container {
            max-width: 582pt;
            margin: 0px auto;
            padding: 0px 16pt;
          }
        `}
      </style>
    </div>
  )
}

export default Container
