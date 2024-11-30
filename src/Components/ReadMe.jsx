import React from 'react'

function ReadMe({ children, name, url }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 19fr',
        backgroundColor: '#161b22',
        margin: '1.03rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '.7rem',
          fontSize: '1.4rem',
          justifyContent: 'start',
          alignItems: 'center',
        }}
      >
        <div
          className={'name-link'}
          style={{
            color: 'rgb(68, 147, 248)',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          onClick={() => window.open(url)}

        >{name}</div>
        <div

          style={{
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
          }}
        >/&nbsp; Read Me</div>
      </div>
      <div
        style={{
          border: '.01rem solid grey',
          overflow: 'auto',
          backgroundColor: 'white'
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default ReadMe