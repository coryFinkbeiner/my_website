import React from 'react'
import Card from './Card'

const cards = [
  {
    route: '/'
  },
  {
    route: '/resume'
  },
  {
    route: '/github'
  },
  {
    route: '/contact'
  }
]

const one = {
  backgroundColor: 'blue',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '20px',
  justifyContent: 'center',
}

function Lowbar() {
  return (
    <div style={one}>
      {cards.map((card, index) => (
        <Card route={card.route} key={index}/>
      ))}
    </div>
  )
}

export default Lowbar