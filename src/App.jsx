import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';

const appRouter = createBrowserRouter([
  { path:"/", 
    element: <Home />,
  },
  { path:"/login",
    element: <Login />,
  },
  { path:"/register",
    element: <Register />,
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={appRouter}> </RouterProvider>   

    </div>
  )
}

export default App
