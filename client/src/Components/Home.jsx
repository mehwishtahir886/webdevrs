import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Courses from './Courses'
import Footer from './Footer'
import Navbar from './Navbar'
import Services from './Services'
import Homeabout from './Homeabout'
import Faqs from './Faqs'
import RoadMap from './RoadMap'
import Banner from './Banner'
import BlogCarousel from './BlogCarousel'
import ProjectCarousel from './ProjectCarousel'
import ReviewCarousel from './ReviewCarousel'
import EvenetCarousel from './EventsCarousel'
const Home = () => {

  return (
    <div>
        <Navbar/>
        <Banner/>
        <RoadMap/>
        <Homeabout/>
      <EvenetCarousel/>
        <Courses />
        <ProjectCarousel/>
        <Services/>
        <ReviewCarousel/>
        <Faqs/>
        <BlogCarousel/>
        <Footer/>
    </div>
  )
}

export default Home