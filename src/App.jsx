import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Contact from './components/Contact'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/contact",
    element: <Contact />
  }
])


function App() {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App