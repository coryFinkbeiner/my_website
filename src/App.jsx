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

              </Route>

            </Route>

          ))
        }
      />
    </div>
  )
}

export default App
