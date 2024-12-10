import React from 'react'

import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import Face from '../Images/Face.jpg';




  const Card = ({icon}) => (
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

const cardStyles = {
  height: '100%',
  width: '14.5rem',
  borderRadius: '1rem',
}

const skillCardStyles = {
  height: '14rem',
  // width: '11rem',
  // height: '15rem',
  width: '10rem',
  borderRadius: '1rem',

}

function Home() {
  return (
    <div style={{
      backgroundColor: 'green',
      // height: '100%',
      // maxHeight: '100%',
      display: 'grid',
      gridTemplateRows: '1fr 2fr',
    }}>


      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: '1rem',
          // justifyContent: 'center',
          // alignItems: 'center',
          padding: '1rem',
        }}
      >

        <div></div>


        <img src={Face} alt="Face"
          style={{
            width: '14.5rem',
            height: '100%',
            borderRadius: '1rem',
            objectFit: 'cover',
            // display: 'block'
          }}
        />

        <div
          style={{
            ...cardStyles,
            backgroundColor: 'black',
            color: 'white',

          }}
        >
          <div
            style={{
              fontSize: '2.5rem',
              fontFamily: 'verdana',
              padding: '.6rem',
              marginBottom: '1.7rem'
            }}
          >Cory Finkbeiner</div>
          <div
            style={{
              fontSize: '2.1rem',
              fontFamily: 'verdana',
              padding: '.3rem',
              marginLeft: '1rem',
              fontStyle: 'italic'
            }}
          >Software Engineer</div>
        </div>
        <div></div>
      </div>


      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr 1fr',
          padding: '1rem',
          marginLeft: '1rem',
          marginRight: '1rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            placeItems: 'center',
          }}
        >
          <div
            style={{
              ...skillCardStyles,
              backgroundColor: 'white',
            }}
          >

          </div>
          <div
            style={{
              ...skillCardStyles,
              backgroundColor: 'white',
            }}
          >
            <Card icon={<IoLogoJavascript />} />
          </div>
          <div
            style={{
              ...skillCardStyles,
              backgroundColor: 'white',
            }}
          >
          </div>
          <div
            style={{
              ...skillCardStyles,
              backgroundColor: 'white',
            }}
          >
            <Card icon={<RiNextjsFill />} />
          </div>

        </div>
        <div
          style={{
            backgroundColor: 'white',
          }}
        >

        </div>
      </div>
    </div>
  )
}

export default Home