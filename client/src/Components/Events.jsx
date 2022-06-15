import React from 'react'
import classes from "./Events.module.css"
import Navbar from "./Navbar"
import Footer from './Footer'
import web1 from '../videos/web.mp4';
import { Container, Row } from 'react-bootstrap'
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
            <Container fluid className={classes.EventSection}>
                <div className={classes.EventSidebar}>
                    <h5 className={classes.EventSideHead}>Event Catagories</h5>
                    <li>All</li>
                    <li>Students</li>
                    <li>Chairman</li>
                    <li>Seminars</li>
                    <li>Awarderd Students</li>
                    <li>LeaderShip</li>
                    <li>Party</li>
                    <li>Annual Dinner</li>
                    <li>Group Galery</li>
                    <li>Instructors</li>
                </div>
                <Container className={classes.EventsGallery}>

                </Container>
            </Container>
            <Footer />
        </>
    )
}

export default Events