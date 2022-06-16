import React from 'react'
import classes from "./Events.module.css"
import Navbar from "./Navbar"
import Footer from './Footer'
import web1 from '../videos/web.mp4';
import Event1 from "../images/Event1.jpg"
import { Container, Row, Col } from 'react-bootstrap'
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
                    <Row >
                        <Col className={classes.Gallery_part1} lg={5}>
                            <div className={classes.Gallery_part1_img}>
                                <div className={classes.EventOverlay}></div>
                                <img className={classes.Eventimg} src={Event1}/>
                            </div>
                            <div className={classes.Gallery_part1_content}>
                                <div className={classes.content_inner}>
                                    <h6 className={classes.EventDate} >
                                        29 july,1998
                                    </h6>
                                    <h5 className={classes.EventHEading}>
                                        Seminaars in College
                                    </h5>
                                    <p className={classes.EventDescreption}>
                                        Lorem ipsum dolor sit amet consectetur, dolorum rerum facilis. Molestias ipsum sunt maiores corporis cupiditate delectus nisi earum eaque quo obcaecati.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col className={classes.Gallery_part1} lg={5}>
                            <div className={classes.Gallery_part1_img}>
                                <div className={classes.EventOverlay}></div>
                                <img className={classes.Eventimg} src={Event1}/>
                            </div>
                            <div className={classes.Gallery_part1_content}>
                                <div className={classes.content_inner}>
                                    <h6 className={classes.EventDate} >
                                        29 july,1998
                                    </h6>
                                    <h5 className={classes.EventHEading}>
                                        Seminaars in College
                                    </h5>
                                    <p className={classes.EventDescreption}>
                                        Lorem ipsum dolor sit amet consectetur, dolorum rerum facilis. Molestias ipsum sunt maiores corporis cupiditate delectus nisi earum eaque quo obcaecati.
                                    </p>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Container>
            <Footer />

        </>
    )
}

export default Events