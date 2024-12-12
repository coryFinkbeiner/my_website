import React from 'react'
import { Outlet } from 'react-router-dom'
import Lowbar from '../Components/Lowbar'

const one = {
  height: '97%',
  width: '100%',
  overflow: 'auto',
  // margin: '1rem',
  display: 'grid',
  gridTemplateRows: '5fr 1fr',
  border: '2rem solid grey',
  borderRadius: '2rem',
}


function Container() {
  return (

    <div style={one}>

      <Outlet/>
      <Lowbar />

    </div>

  )
}

export default Container