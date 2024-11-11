import React from 'react'
import { Link } from "react-router-dom"

const one = {
  backgroundColor: 'white',
  textDecoration: 'none',
  width: '11rem',
  height: '100%',
  borderRadius: '1rem',
  margin: '.3rem'


}

function Card({ route }) {
  return (
    <Link style={one}
      to={route}
    >
      {route}
    </Link>
  )
}

export default Card