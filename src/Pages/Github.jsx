import React, { useState, useEffect } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

const ProjectLink = ({ name, path }) => (
  <NavLink
    to={path}
    style={({ isActive }) => ({
      textDecoration: 'none',
      height: '100%',
      color: 'white',
      fontSize: '1.7rem',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      cursor: 'pointer',
      backgroundColor: isActive ? '#2b3746' : 'transparent',
      borderRadius: '1rem',
    })}
  >{name}</NavLink>
);

function Github() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 15fr',
        backgroundColor: '#161b22',
        // overflow: 'auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '.25fr 1fr 1fr 1fr',
          gap: '.3rem',
          backgroundColor: '#0d1117',
          borderBottom: '.01rem solid grey',
        }}
      >
        <FaGithub
          style={{
            color: 'white',
            display: 'flex',
            justifySelf: 'center',
            alignSelf: 'center',
            fontSize: '2.8rem',
            cursor: 'pointer',
          }}
          onClick={() => window.open('https://github.com/coryFinkbeiner', '_blank', 'noopener,noreferrer')}
        />
        <ProjectLink key={'project1'} name={'Spotify App'} path={'/github/project1'} />
        <ProjectLink key={'project2'} name={'This Website'} path={'/github/project2'} />
        <ProjectLink key={'project3'} name={'Donation Site'} path={'/github/project3'} />
      </div>
      <Outlet />
    </div>
  )
}

export default Github