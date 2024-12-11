function Resume() {

  const downloadButtonStyle = {
    backgroundColor: '#bb86fc',
    color: '#121212',
    border: 'none',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(187, 134, 252, 0.3)',
    zIndex: 1000,
    position: 'absolute',
    top: '20px',
    right: '20px',
  };


  const handleDownload = async () => {
    const pdfUrl = 'https://docs.google.com/document/d/1YTIafxYtL-IGobp1_p8cOsnJMXdTOCR90fjLq8V-xRU/export?format=pdf';
    window.open(pdfUrl, '_blank');
  };

  const styles = {
    body: {
      backgroundColor: '#121212',
      color: '#e0e0e0',
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.6,
      padding: '20px',
      position: 'relative',
      overflow: 'auto',
    },
    resume: {
      margin: '0 auto',
    },
    header: {
      borderBottom: '2px solid #bb86fc',
      paddingBottom: '10px',
      marginBottom: '20px',
    },
    h1: {
      color: '#bb86fc',
      fontSize: '2.5em',
      marginBottom: '10px',
    },
    h2: {
      color: '#bb86fc',
      fontSize: '1.8em',
      marginTop: '30px',
    },
    h3: {
      color: '#bb86fc',
      fontSize: '1.3em',
      marginBottom: '5px',
    },
    p: {
      marginBottom: '10px',
    },
    ul: {
      paddingLeft: '20px',
    },
    li: {
      marginBottom: '5px',
    },
    section: {
      marginBottom: '20px',
    },
    strong: {
      color: '#03dac6',
    },
    a: {
      color: '#8ab4f8',
      textDecoration: 'none',
    },
  };

    return (
      <div style={{...styles.body, ...styles.resume}}>
        <header style={styles.header}>
          <h1 style={styles.h1}>Cory Finkbeiner</h1>
          <p style={styles.p}>Grand Rapids, MI | (616) 340-5176 | coryfinkbeiner@gmail.com</p>
          <p style={styles.p}>
            <a href="https://www.linkedin.com/in/CoryFinkbeiner" style={styles.a}>www.linkedin.com/in/CoryFinkbeiner</a> |
            <a href="https://github.com/coryFinkbeiner" style={styles.a}>github.com/coryFinkbeiner</a>
          </p>
        </header>

        <button onClick={handleDownload} style={downloadButtonStyle} aria-label="Download Resume">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
        </button>

        <section style={styles.section}>
          <h2 style={styles.h2}>Technical Skills</h2>
          <p style={styles.p}><strong style={styles.strong}>Languages:</strong> JavaScript, Python</p>
          <p style={styles.p}><strong style={styles.strong}>Front End:</strong> React, Next.JS, HTML, CSS, Tailwind, Bootstrap, Material UI</p>
          <p style={styles.p}><strong style={styles.strong}>Back End:</strong> Node.js, MySQL, PostgreSQL, MongoDB, Firebase, RESTful API Development</p>
          <p style={styles.p}><strong style={styles.strong}>Systems/Methodologies/Other:</strong> Git, Agile Methodology, MVC, WordPress</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Projects</h2>
          <div style={styles.section}>
            <h3 style={styles.h3}>Full Stack | Spotify Application</h3>
            <p style={styles.p}>Github | NextJS, React, Node.js, NextAuth, Spotify API, HTML/CSS | 2024</p>
            <ul style={styles.ul}>
              <li style={styles.li}>Created proof of concept application using Next.js and React to interact with Spotify's API and create threaded playlists within a Spotify account</li>
              <li style={styles.li}>Enabled searching for artists, albums, and playlists</li>
              <li style={styles.li}>Incorporated OAuth workflow for user authorization</li>
            </ul>
          </div>
          <div style={styles.section}>
            <h3 style={styles.h3}>Front End | Client Website</h3>
            <p style={styles.p}>Github | React, Node.js, PostgreSQL, Express, Socket.io, Styled Components | 2022</p>
            <ul style={styles.ul}>
              <li style={styles.li}>Created UI component for handling transaction states related to donations</li>
              <li style={styles.li}>Created Admin page and API routes to approve and deny users for charity status</li>
              <li style={styles.li}>Collaborated with a team to decide on DBMS, schema design, project architecture, Git workflow, and division of labor using AGILE methodology</li>
            </ul>
          </div>
          <div style={styles.section}>
            <h3 style={styles.h3}>Back End | E-Commerce</h3>
            <p style={styles.p}>Github | Node.js, PostgreSQL, AWS EC2, Loader.io, Nginx, REST APIs | 2022</p>
            <ul style={styles.ul}>
              <li style={styles.li}>Created a back end API service which bridged an existing UI client with a Heroku database, and designed and optimized read/write queries</li>
              <li style={styles.li}>Identified system bottlenecks by performing load and stress testing with AutoCannon and Loader.io</li>
              <li style={styles.li}>Reduced latency by 800% with B-tree indexes, connecting pooling, and building aggregate tables in PostgreSQL for efficient read operations</li>
              <li style={styles.li}>Developed and scaled RESTful API with PostgreSQL database of 20M products by utilizing Nginx with ip_hash load-balancing on multiple AWS EC2 instances</li>
            </ul>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Professional Experience</h2>
          <div style={styles.section}>
            <h3 style={styles.h3}>Web Developer Contractor | Strap Photo Club</h3>
            <p style={styles.p}>2023-2024</p>
            <ul style={styles.ul}>
              <li style={styles.li}>Migrated proprietary technology from a generic HTML/CSS/Javascript frontend to React framework</li>
              <li style={styles.li}>Assisted with application extension, Pulse, incorporating Spotify's Web Playback SDK to transfer queue control and player functionality to client</li>
            </ul>
          </div>
          <div style={styles.section}>
            <h3 style={styles.h3}>Texas Holdem Player and Coach | Self-Employed</h3>
            <p style={styles.p}>2016-2021</p>
            <ul style={styles.ul}>
              <li style={styles.li}>Real-time application of combinatorics, game theory and advanced poker theory in a high-consequence environment</li>
              <li style={styles.li}>A pursuit of self-discipline, emotional control and rigorous study</li>
              <li style={styles.li}>Gained proficiency in advanced poker theory software like PioSolver and Flopzilla</li>
            </ul>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Education</h2>
          <p style={styles.p}><strong style={styles.strong}>Hack Reactor</strong> | Advanced Software Engineering Immersive Program | 2022</p>
          <p style={styles.p}><strong style={styles.strong}>Grand Valley State University</strong> | B.S. Electronic Journalism | 2013</p>
        </section>
      </div>
    );


}


export default Resume