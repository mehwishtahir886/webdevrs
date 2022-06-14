import React from 'react'
// import About from './About'
import Courses from './Courses'
import Footer from './Footer'
import Navbar from './Navbar'
import Roadmap from './Roadmap'
import Services from './Services'
import Homeabout from './Homeabout'
import Carousel from './Carouselslider'
import Faqs from './Faqs'
import Blogs from './Blogs'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Blogs/>
        <Faqs/>
        <Homeabout/>
        <Carousel/>
        <Roadmap/>
        <Courses />
        <Services/>
        <Footer/>
    </div>
  )
}

export default Home