import React from 'react'
import Card from './Card'
import { FaGithub, FaHome, FaPen  } from 'react-icons/fa';
import { FaRegNewspaper } from "react-icons/fa6";

const cards = [
  {
    route: '/',
    icon: <FaHome />
  },
  {
    route: '/resume',
    icon: <FaRegNewspaper />
  },
  {
    route: '/github',
    icon: <FaGithub />
  },
  {
    route: '/contact',
    icon: <FaPen />
  }
]

const one = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '.3rem',
  // position: 'fixed',
  // bottom: '0'
  // height: '30vh'
}

function Lowbar() {
  return (
    <div style={one}>
      {cards.map((card, index) => (
        <Card route={card.route} icon={card.icon} key={index}/>
      ))}
    </div>
  )
}

export default Lowbar