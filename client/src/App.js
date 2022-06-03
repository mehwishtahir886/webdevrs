import React from 'react'
import Contacts from './Components/Contacts'
import Navbar from './Components/Navbar'
import {Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/Contact" element={<Contacts/>}/>
    </Routes>
    </>
  )
}

export default App