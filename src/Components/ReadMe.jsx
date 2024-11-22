import React from 'react'

function ReadMe({ children, name }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 19fr',

        backgroundColor: '#161b22',
        margin: '1.2rem'
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
          style={{
            color: 'rgb(68, 147, 248)',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            ursor: 'pointer',
          }}

        >{name}</div>
        <div
          style={{
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
          }}
        >/&nbsp; README</div>
      </div>
      <div
        style={{
          // backgroundColor: 'brown',
          border: '.01rem solid grey',
          // margin: '1.2rem'
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default ReadMe