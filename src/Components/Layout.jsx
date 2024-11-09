import React from 'react'
import { Outlet } from 'react-router-dom'
// import Sidebar from '../Components/Sidebar'




function Layout() {
  return (
    <div
      style={{
        // backgroundColor: 'white',
        height: '93vh',
        width: '100vw',
        display: 'grid',
        gridTemplateColumns: '1fr 5.5fr',
        overflow: 'hidden', // Prevent overall container from scrolling
        minHeight: '93vh',
      }}
    >

      <Outlet />
    </div>
  )
}

export default Layout