import React from 'react'
import ReadMe from '../Components/Readme'
import Search from '../Images/Search.jpg';
import GetRecs from '../Images/GetRecs.jpg';


function Project1() {
  return (
    <ReadMe
      name={'spotter-fb'}
      url={'https://github.com/coryFinkbeiner/spotter-fb/tree/main'}
    >
      <div style={{}}> <h1>Functional Spotify API Project</h1> <p>This project is a music app concept featuring functionalities like user-curated sidebars, search with year filtering, and custom playlists with sub-queues and true shuffle.</p> <h2>Features:</h2> <ul> <li> <strong>Search:</strong> <ul> <li>Find specific songs or albums with ease.</li> <li>Filter results by albums, artists, songs and year range.</li> </ul> <img src={Search} alt="Search functionality" style={{maxWidth: '70%', height: 'auto'}} /> </li> <li> <strong>Custom Playlist Generator:</strong> <ul> <li>Generate unique recommendations utilizing Spotify's seed and settings method.</li> <li>Create personalized playlists and save them to Spotify.</li> </ul> <img src={GetRecs} alt="Get Recommendations" style={{maxWidth: '70%', height: 'auto'}} /> </li> <li> <strong>Firebase Functions:</strong> <ul> <li>Leverage Firebase functions to handle Spotify token reauthorization seamlessly, ensuring uninterrupted use.</li> </ul> </li> </ul> <h2>Running the App:</h2> <ol> <li> <strong>Client:</strong> <ul> <li>Navigate to the <code>client</code> directory.</li> <li>Run <code>npm run dev</code> to start the development server.</li> </ul> </li> <li> <strong>Firebase Functions:</strong> <ul> <li>Navigate to the <code>functions</code> directory.</li> <li>Run <code>firebase emulators:start --only functions</code> to start the Firebase emulators.</li> </ul> </li> </ol> </div>
    </ReadMe>
  )
}

export default Project1