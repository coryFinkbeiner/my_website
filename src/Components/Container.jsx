import React from 'react'
import { Outlet } from 'react-router-dom'
import Lowbar from '../Components/Lowbar'

const one = {
  // backgroundColor: 'red',
  height: '97%',
  width: '100%',
  overflow: 'hidden',
  margin: 'auto',
  display: 'grid',
  gridTemplateRows: '5fr 1fr',
  overflow: 'hidden',
  border: '2rem solid grey',
  borderRadius: '2rem'

}


function Container() {
  return (

    <div style={one}>

      <Outlet />
      <Lowbar />

    </div>

  )
}

export default Container