import { useState } from 'react'
import './App.css'
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


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXhz9pJ-NlWlIrFeJdQe_gAq44Lsu7lJc",
  authDomain: "website999-71344.firebaseapp.com",
  projectId: "website999",
  storageBucket: "website999.appspot.com",
  messagingSenderId: "792979793137",
  appId: "1:792979793137:web:aa71583e42bfa476a03550"
};

const app = initializeApp(firebaseConfig);

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
