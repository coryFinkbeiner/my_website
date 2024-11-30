import React from 'react'
import ReadMe from '../Components/Readme'

function Project3() {
  return (
    <ReadMe
      name={'Project_Greene'}
      url={'https://github.com/GreeneOcean/Project_Greene/blob/dev/README.md'}
      style={{
        backgroundColor: 'white'
      }}
    >
      <>
        <h2>About</h2>
        <p>Greene Ocean seeks connect people in need with those more fortunate through technology. Our web application provides a platform for perspective donors to create an account (authentication achieved without the use of an external API), post their donations and upload photos of their donations. Donors have the ability to live chat and/or video chat with perspective recipients before approving the transaction, allowing greater control over where their donation is going. Likewise, donation recipients have the ability to browse available donations in their area and claim items based on their individual needs and circumstances. Integration with Google Maps API makes browsing easy. Charities have the option to claim exclusive donations marked as for charity only.</p>

        <img src="https://i.imgur.com/KLruRtZ.png" alt="Green ocean landing page" width="49%" height="auto" />
        <img src="https://i.imgur.com/tucUhtK.png" alt="Green ocean browse page" width="49%" height="auto" />

        <p>This project was created by eight engineers working closely over the course of one week to meet the requests of a client based in Austin, Texas. As a team, we believe that tools like our website will inspire generosity among those in your local community and connect everyone on a deep and fundamental level.</p>

        <h2>User Stories</h2>
        <ul>
          <li>As a user you should be able to sign-up/login with a secure username and password.</li>
        </ul>
        <img src="images/login.jpeg" alt="Login image" />
        <ul>
          <li>As a signed in user you should be able to donate items.</li>
        </ul>
        <img src="images/donate.gif" alt="Donate gif" />
        <ul>
          <li>As a signed in user you should be able to browse items in your area.</li>
        </ul>
        <img src="images/map.gif" alt="Map gif" />
        <ul>
          <li>As a signed in user you should be able to view your donated items, items you&apos;d expressed interest in, approved items, history of your transactions and chat with other users.</li>
        </ul>
        <img src="images/videoChat.gif" alt="Video chat gif" />

        <h2>Technologies</h2>
        <img src="https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge" alt="React" />
        <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="ReactRouter" />
        <img src="https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=for-the-badge" alt="PostgreSQL" />
        <img src="https://img.shields.io/badge/-Node-9ACD32?logo=node.js&logoColor=white&style=for-the-badge" alt="Node" />
        <img src="https://img.shields.io/badge/-Express-DCDCDC?logo=express&logoColor=black&style=for-the-badge" alt="Express" />
        <img src="https://img.shields.io/badge/-Firebase-FFD700?logo=firebase&logoColor=white&style=for-the-badge" alt="Firebase" />
        <img src="https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white" alt="Socket.io" />
        <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku" />

        <h2>Contributors</h2>
        <ul>
          <li><a href="https://github.com/7socks">Elfric Dexter</a></li>
          <li><a href="https://github.com/cgf5033">Colin Fitzhenry</a></li>
          <li><a href="https://github.com/coryFinkbeiner">Cory Finkbeiner</a></li>
          <li><a href="https://github.com/Doobss">Ian Bringe</a></li>
          <li><a href="https://github.com/jordo-mordo">Jordan Moore</a></li>
          <li><a href="https://github.com/MarkAlperin">Mark Alperin</a></li>
          <li><a href="https://github.com/positivefx">Stephanie Yeong</a></li>
          <li><a href="https://github.com/dybn7758">Ying Deng</a></li>
        </ul>

        <h2>Usage</h2>

        <h3>Available Scripts</h3>

        <p>In the client project directory, you can run:</p>
        <h4><code>npm run build:dev</code></h4>

        <p>Runs the app in the development mode.<br />
        Open <a href="http://localhost:8080">http://localhost:8080</a> to view it in your browser.</p>

        <p>In the server project directory, you can run:</p>
        <h4><code>npm run hydrate</code></h4>
        <p>This will seed the database with dummy data.</p>

        <h4><code>npm run server:dev</code></h4>
        <p>Launches the server and uses Nodemon to monitor for any file changes. If any file changes are detected with Nodemon, it will automatically restart the node server.<br />
        Server will be listening on <a href="http://localhost:8080">http://localhost:8080</a></p>
      </>
    </ReadMe>
  )
}

export default Project3