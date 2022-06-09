import React from 'react'
import About from './About'

import Courses from './Courses'

import Footer from './Footer'
import Navbar from './Navbar'
import Services from './Services'
import SignUp from './SignUp'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <SignUp/>
        <Courses />
        <Services/>
        <Footer/>
    </div>
  )
}

export default Home