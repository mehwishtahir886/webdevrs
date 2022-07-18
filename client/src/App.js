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
import ProjectDetail from './Components/ProjectDetail'
import DashBoard from './Dashboard/DashBoard'
import About from './Components/About'
import classes from './Components/Reviews.module.css';
import { AiOutlineClose } from "react-icons/ai";

const App = () => {
  const closeVideo = () => {
    document.getElementsByClassName("r_video")[0].style.display="none";
    document.getElementsByClassName("v_frame")[0].src="";
    }
  return (
    <>
                  <div  className={`${classes.review_frame} r_video`}>
                <div className="vid_close" onClick={closeVideo}><AiOutlineClose/></div>
                                   <iframe className="v_frame" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                   </div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactPage" element={<ContactsPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/courses' element={<ComCourses />} />
        <Route path='/Forgot' element={<Forget />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/events' element={<Events />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/projectdetail' element={<ProjectDetail />} />
        <Route path='/Dashboard' element={<DashBoard/>} />

      </Routes>
    </>
  )
}

export default App