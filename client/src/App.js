import React from 'react'
import { Route, Routes } from "react-router-dom"
import ComCourses from './Components/ComCourses'
import ContactsPage from './Components/ContactsPage'
import Home from './Components/Home'
import Login from './Components/Login'
import Projects from './Components/Projects'
import SignUp from './Components/SignUp'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="//ContactPage" element={<ContactsPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/courses' element={<ComCourses />} />
      </Routes>
    </>
  )
}

export default App