import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Courses from './Courses'
import Footer from './Footer'
import Navbar from './Navbar'
import Roadmap from './Roadmap'
import Services from './Services'
import Homeabout from './Homeabout'
import Carousel from './Carouselslider'
import Faqs from './Faqs'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo } = userLogin

  useEffect(() => {
    console.log(userInfo,"..")
    if (userInfo == null) {
      navigate("/login")
      console.log("login")
    }
  }, [userInfo])
  return (
    <div>
        <Navbar/>
        <Homeabout/>
        <Carousel/>
        <Roadmap/>
        <Courses />
        <Services/>
        <Faqs/>
        <Footer/>
    </div>
  )
}

export default Home