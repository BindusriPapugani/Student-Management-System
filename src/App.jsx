import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routing } from './RoutingObject/Router'

const App = () => {
  document.title = "Student Management System"
  return (
    <>
    <RouterProvider router={routing}></RouterProvider>
    </>
  )
}

export default App