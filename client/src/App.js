import React from 'react'
import { Route, Routes } from "react-router-dom"
import ComCourses from './Components/ComCourses'
import ContactsPage from './Components/ContactsPage'
import Home from './Components/Home'
import Login from './Components/Login'
import Projects from './Components/Projects'
import SignUp from './Components/SignUp'
import Forget from './Components/Forget'
import Blogs from './Components/Blogs'
import Events from './Components/Events'
import Reviews from './Components/Reviews'
<<<<<<< HEAD
import About from './Components/About'
=======
import ProjectDetail from './Components/ProjectDetail'
>>>>>>> 4c51c2e16d4666369059da55ee8a5a35d0042511

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
<<<<<<< HEAD
        <Route path="/about" element={<About />} />
        <Route path="//ContactPage" element={<ContactsPage />} />
=======
        <Route path="/ContactPage" element={<ContactsPage />} />
>>>>>>> 4c51c2e16d4666369059da55ee8a5a35d0042511
        <Route path='/login' element={<Login />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/courses' element={<ComCourses />} />
        <Route path='/Forgot' element={<Forget />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/events' element={<Events />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/projectdetail' element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

export default App