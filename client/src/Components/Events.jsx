import React from 'react'
import classes from "./Events.module.css"
import Navbar from "./Navbar"
import web1 from '../videos/web.mp4';
import { Container } from 'react-bootstrap'
const Events = () => {
  
    return (
        <>
            <Navbar />
            <Container fluid className={classes.MainEventBanner}>
                <div className={classes.MainVideo} >
                    <video width="100%" style={{ "object-fit": "cover" }} autoplay="true" muted="true" loop="true" preload="auto">
                        <source src={web1} type="video/mp4" />Sorry, your browser doesn't support embedded videos.</video>
                </div>
            </Container>
        </>
    )
}

export default Events