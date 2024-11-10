import React from 'react'
import { Link } from "react-router-dom"

const one = {
  backgroundColor: 'white',
  textDecoration: 'none',

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