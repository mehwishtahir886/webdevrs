import React from 'react'
import About from './About'
import Courses from './Courses'
import Footer from './Footer'
import Login from './Login'
import Navbar from './Navbar'
import Roadmap from './Roadmap'
import Services from './Services'
import SignUp from './SignUp'
const Home = () => {
  return (
    <div>
    
        <Navbar/>
        <Roadmap/>
        <Courses />
        <Services/>
        <Footer/>
    </div>
  )
}

export default Home