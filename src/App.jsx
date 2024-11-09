import { useState } from 'react'
import './App.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import Layout from './Components/Layout'
import Home from './Components/Home'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXhz9pJ-NlWlIrFeJdQe_gAq44Lsu7lJc",
  authDomain: "website999-71344.firebaseapp.com",
  projectId: "website999",
  storageBucket: "website999.appspot.com",
  messagingSenderId: "792979793137",
  appId: "1:792979793137:web:aa71583e42bfa476a03550"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// console.log({app})








function App() {

  return (
    <RouterProvider
      router={
        createBrowserRouter(createRoutesFromElements(

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>

        ))
      }
    />
  )
}

export default App
