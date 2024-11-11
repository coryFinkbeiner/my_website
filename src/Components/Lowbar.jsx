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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '.3rem',
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