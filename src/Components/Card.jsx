import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from "react-router-dom"



const one = {
  backgroundColor: 'white',
  textDecoration: 'none',
  width: '11rem',
  height: '100%',
  borderRadius: '1rem',
  margin: '.3rem',
  display: 'grid',
  gridTemplateRows: '1fr 3fr 1fr',
}



function Card({ route, icon }) {

  // const [ isChosen, setIsChosen ] = useState(false)

  console.log(useLocation())

  // const location = useLocation()

  // useEffect(() => {
  //   setIsChosen(false)
  //   if (location.pathname === route) setIsChosen(true)
  // }, [isChosen, route])







  const Front = () => (
    <>
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
    </>
  )

  const Back = () => (
    <div>
      asdfasd
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