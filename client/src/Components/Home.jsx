import React from 'react'
// import About from './About'
import Courses from './Courses'
import Footer from './Footer'
// import Login from './Login'
import Navbar from './Navbar'
import Roadmap from './Roadmap'
import Services from './Services'
// import SignUp from './SignUp'
import Homeabout from './Homeabout'
import Carousel from './Carouselslider'
import Faqs from './Faqs'
import Forget from './Forget'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Homeabout/>
        <Roadmap/>
        <Courses />
        <Services/>
        <Faqs/>
        <Footer/>
    </div>
  )
}

export default Home