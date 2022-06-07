import React from 'react'
import About from './About'
import Contacts from './Contacts'
import Footer from './Footer'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Contacts/>
        <Footer/>
    </div>
  )
}

export default Home