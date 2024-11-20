import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';


const ProjectLink = ({ name, path }) => {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <div style={{ height: '100%' }}>{name}</div>
    </Link>
  );
};

function Github() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 20fr',
        backgroundColor: '#0d1117',
        overflow: 'auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '.25fr 1fr 1fr 1fr',
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

        <ProjectLink key={'Project1'} name={'Project1'} path={'/github/project1'} />
        <ProjectLink key={'Project1'} name={'Project1'} path={'/github/project2'} />
        <ProjectLink key={'Project1'} name={'Project1'} path={'/github/project3'} />

      </div>

      <Outlet />

    </div>
  )
}

export default Github