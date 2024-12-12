import React from 'react'
import ReadMe from '../Components/Readme'
import Resume from '../Images/Resume.jpg';
import Home from '../Images/Home.jpg';
import Contact from '../Images/Contact.jpg';
import Github from '../Images/Github.jpg';


function Project2() {
  return (
    <ReadMe
      name={'my_website'}
      url={'https://github.com/coryFinkbeiner/my_website/tree/dev'}
    >
      <h1>Personal Portfolio Website</h1>

      <p>A responsive personal website showcasing professional skills, projects, and contact information, built with raw HTML/CSS and React technologies.</p>

      <h2>Project Overview</h2>

      <p>This website demonstrates a clean, modern web application with multiple routes and Firebase integration.</p>

      <h3>Key Features</h3>

      <ul>
        <li><strong>Responsive Design</strong>: Fully mobile and desktop compatible</li>
        <li><strong>React Router</strong>: Smooth, single-page application navigation</li>
        <li><strong>Firebase Integration</strong>: Live hosting and Firestore message handling</li>
      </ul>

      <h2>Pages</h2>

      <h3>Home Page</h3>
      <img src={Home} alt="Home Page" />

      <p>Landing section introducing personal brand and professional summary.</p>

      <h3>Resume</h3>
      <img src={Resume} alt="Resume Page" />

      <p>Comprehensive professional experience, skills, and educational background.</p>

      <h3>Contact Form</h3>
      <img src={Resume} alt="Contact Page" />

      <p>Interactive contact form with Firestore backend for message submission.</p>

      <h3>GitHub Projects</h3>
      <img src={Github} alt="GitHub Projects" />

      <p>Showcase of coding projects with nested routing and detailed descriptions.</p>

      <h2>Technical Stack</h2>

      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>Firebase Firestore</li>
        <li>Firebase Hosting</li>
        <li>CSS</li>
        <li>HTML5</li>
      </ul>

      <h2>Deployment</h2>

      <p>Hosted live on Firebase, ensuring high performance and reliability.</p>
    </ReadMe>
  )
}

export default Project2
