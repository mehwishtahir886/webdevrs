import React from 'react'
import About from './About'
import Contacts from './Contacts'
import Footer from './Footer'
import Navbar from './Navbar'
import Services from './Services'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default Home