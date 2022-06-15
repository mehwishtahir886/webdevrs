import React from 'react'
import classes from "./Events.module.css"
import Navbar from "./Navbar"
import { Container } from 'react-bootstrap'
const Events = () => {
  return (
    <>
        <Navbar />
        <Container fluid className={classes.MainEventBanner}>

        </Container>
    </>
  )
}

export default Events