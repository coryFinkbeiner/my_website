import React from 'react'
import { Link } from "react-router-dom"

const one = {
  backgroundColor: 'white',
  textDecoration: 'none',
  width: '11rem',
  height: '100%',
  borderRadius: '1rem',
  margin: '.3rem',
}

function Card({ route }) {
  return (
    <Link style={one}
      to={route}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 2C2 2.55228 2.44772 3 3 3H29C29.5523 3 30 2.55228 30 2V29C30 29.5523 29.5523 30 29 30H3C2.44772 30 2 29.5523 2 29V2Z" fill="#F5F5F5" />
  <path d="M5 6.5C7 7.5 9 8.5 11 9.5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M13 6.5C15 7.5 17 8.5 19 9.5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M21 6.5C23 7.5 25 8.5 27 9.5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M5 15C7 16 9 17 11 18" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M13 15C15 16 17 17 19 18" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M21 15C23 16 25 17 27 18" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
    </Link>
  )
}

export default Card