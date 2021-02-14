import React from 'react'

const Card = ({ children }) => {
  return (
    <div style={{ background: '#C4C4C4', padding: 12, margin: 24 }}>
      {children}
    </div>
  )
}

export default Card
