import React from 'react'
import {Route, Routes} from "react-router-dom"
import Contacts from './Components/Contacts'
import Home from './Components/Home'
import Projects from './Components/Projects'

const App = () => {
  return (
    
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/Contact" element={<Contacts/>}/>
    </Routes>
    </>
  )
}

export default App