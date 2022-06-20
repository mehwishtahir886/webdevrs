import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import classes from './About.module.css'
import { 
  Container,
  Row,
  Col,
 } from 'react-bootstrap'

import { IoIosArrowDown } from "react-icons/io";

const About = () => {
  return (
    <>
      <Navbar />
      <Container fluid className={classes.main_About}>
        <Container fluid className={classes.banner_About}>
          <div className={classes.banner_About_main} >
            <div className={classes.banner_About_content}>
                <h1>Info About members of that institute</h1>
                <p>A reflection of the purpose and personality of the business and its owners or top employees.</p>
            </div>

            <div className={classes.banner_About_icon} >
              <IoIosArrowDown style={{fontSize:"30px",cursor:"pointer"}} />
            </div>
          </div>
        </Container>
        <Container fluid className={classes.About_container}>
          <Row className={classes.About_container_intro}>
            <Col className={classes.About_container_Col}>
              <div className={classes.About_container_leftSides}>
                <div className={classes.About_container_main_circle}></div>
              </div>
            </Col>
            <Col className={classes.About_container_Col}></Col>
          </Row>
          <Row className={classes.About_container_intro}>
            <Col className={classes.About_container_Col}></Col>
            <Col className={classes.About_container_Col}></Col>
          </Row>
          <Row className={classes.About_container_intro}>
            <Col className={classes.About_container_Col}></Col>
            <Col className={classes.About_container_Col}></Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default About