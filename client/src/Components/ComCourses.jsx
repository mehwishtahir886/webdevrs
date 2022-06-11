import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { AiFillCheckCircle,AiOutlineFieldTime,AiOutlineLaptop,AiOutlineRead } from "react-icons/ai"
import { Container,Row,Col } from 'react-bootstrap'
import classes from './ComCourses.module.css'
import image from '../images/VExtor.png'

const ComCourses = () => {
  return (
    <>
      <Navbar />
      <Container fluid className={classes.Ccourses_main}>
        <Row>
          <Col className={classes.Ccourses_banner}><img src={image} /></Col>
          <Col className={classes.Ccourses_banner_info}>
          <p>Full Stack Development</p>
              <p>WebDevrs</p>
              <p>Essentially, it's any web development project that would normally require both a front end developer and back end developer — but instead, a full stack developer fills the role of both</p>
              <ul>
                <li><AiFillCheckCircle className={classes.Ccourses_banner_info_icons} /><span>Supporting development efforts from projects.</span></li>
                <li><AiFillCheckCircle className={classes.Ccourses_banner_info_icons} /><span>Prototyping and building applications and/or websites.</span></li>
                <li><AiFillCheckCircle className={classes.Ccourses_banner_info_icons} /><span>Designing front end interfaces and user experiences.</span></li>
              </ul>
              <div className={classes.Ccourses_bullets}>
                <div>Front End Development
                  <div></div>
                </div>
                <div>Back End Development
                  <div></div>
                </div>
                <div>Mobile Application
                  <div></div>
                </div>
                <div>Cloud Computing
                  <div></div>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
      <Footer /> 
    </>
  )
}

export default ComCourses