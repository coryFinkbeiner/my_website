import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from "react-router-dom"
import CardDesign from '../Images/CardDesign.jpg';

const one = {
  backgroundColor: 'white',
  textDecoration: 'none',
  width: '11rem',
  height: '15rem',
  borderRadius: '1rem',
  margin: '.3rem',
  padding: '.2rem'
}

function Card({ route, icon }) {

  const Front = () => (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 3fr 1fr',
      }}
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
    </div>
  )

  const Back = () => (
    <div
      style={{
        height: '90%'
      }}
    >
      <img src={CardDesign} alt="Card Design"
        style={{
          width: '100%',
          // height: '100%',
          borderRadius: '1rem',
          objectFit: 'contain',
        }}/>
    </div>
  )

  return (
    <NavLink
      style={one}
      to={route}
    >
      {'/' + useLocation().pathname.split('/')[1] === route ? <Back /> : <Front /> }
    </NavLink>
  )
}

export default Card