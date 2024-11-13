import React from 'react'
import { Link } from "react-router-dom"



const one = {
  backgroundColor: 'white',
  textDecoration: 'none',
  width: '11rem',
  height: '100%',
  borderRadius: '1rem',
  margin: '.3rem',
  display: 'grid',
  gridTemplateRows: '1fr 3fr 1fr',
  // padding: '.5rem'

}

function Card({ route, icon }) {
  return (
    <Link style={one}
      to={route}
    >
      <div
        style={{
          justifySelf: 'start',
          alignSelf: 'start',
          fontSize: '1.8rem',
          margin: '.3rem',
        }}
      >{icon}
      </div>
      <div
        style={{
          justifySelf: 'center',
          alignSelf: 'center',
          fontSize: '5.6rem'
        }}
      >
        {icon}
      </div>
      <div
        style={{
          justifySelf: 'end',
          alignSelf: 'end',
          fontSize: '1.8rem',
          margin: '.3rem'

        }}
      >
        {icon}
      </div>
    </Link>
  )
}

export default Card