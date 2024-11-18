import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';

function Github() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 20fr',
        backgroundColor: '#0d1117',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '.25fr 1fr 1fr 1fr',
          // backgroundColor: 'black',
        }}
      >

      <FaGithub
        style={{
          color: 'white',
          justifySelf: 'center',
          alignSelf: 'center',
          fontSize: '2.8rem',
        }}
        onClick={() => window.open('https://github.com/coryFinkbeiner', '_blank', 'noopener,noreferrer')}
      />



        <Link to='/github/project1'
          style={{ textDecoration: 'none' }}
        >
          <div
            style={{
              backgroundColor: 'black',
              height: '100%'
            }}
          >Project1
          </div>
        </Link>
        <Link to='/github/project2'
          style={{ textDecoration: 'none' }}
        >
          <div
            style={{
              backgroundColor: 'blue',
              height: '100%'
            }}
          >Project2
          </div>
        </Link>
        <Link to='/github/project3'
          style={{ textDecoration: 'none' }}
        >
          <div
            style={{
              backgroundColor: 'red',
              height: '100%'
            }}
          >project3can y
          </div>
        </Link>
      </div>

      <Outlet />

    </div>
  )
}

export default Github