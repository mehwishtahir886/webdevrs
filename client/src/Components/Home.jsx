import React from 'react'
import Contacts from './Contacts'
import Courses from './Courses'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Courses />
        <Contacts/>
    </div>
  )
}

export default Home