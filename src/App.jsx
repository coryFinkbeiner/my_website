import { useState, useEffect } from 'react'

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import Container from './Components/Container'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import Github from './Pages/Github'
import Contact from './Pages/Contact'

import Project1 from './SubPages/Project1'
import Project2 from './SubPages/Project2'
import Project3 from './SubPages/Project3'

function App() {

  return (
    <div className='App'>
      <RouterProvider
        router={
          createBrowserRouter(createRoutesFromElements(

            <Route path="/" element={<Container />}>
              <Route index element={<Home />} />
              <Route path="resume" element={<Resume />} />
              <Route path="contact" element={<Contact />} />

              <Route path="github" element={<Github />}>
                <Route path="project1" element={<Project1 />}/>
                <Route path="project2" element={<Project2 />}/>
                <Route path="project3" element={<Project3 />}/>
              </Route>

            </Route>

          ))
        }
      />
    </div>
  )
}

export default App
