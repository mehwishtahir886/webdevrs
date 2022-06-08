import React from 'react'
import {Route, Routes} from "react-router-dom"
import ContactsPage from './Components/ContactsPage'
import Home from './Components/Home'
import Projects from './Components/Projects'

const App = () => {
  return (
    
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="//ContactPage" element={<ContactsPage/>}/>
    </Routes>
    </>
  )
}

export default App