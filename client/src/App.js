import React from 'react'
import { Route, Routes } from "react-router-dom"
import ComCourses from './Components/ComCourses'
import ContactsPage from './Components/ContactsPage'
import Home from './Components/Home'
import Login from './Components/Login'
import Projects from './Components/Projects'
import SignUp from './Components/SignUp'
import Forget from './Components/Forget'

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
        <Route path='/Forgot' element={<Forget/>}/>
      </Routes>
    </>
  )
}

export default App