import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { AiFillCheckCircle } from "react-icons/ai"
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Container,Row,Col } from 'react-bootstrap'
import classes from './ComCourses.module.css'
import image from '../images/VExtor.png'
import FrontEndImage from '../images/images (2).jfif'

const ComCourses = () => {
  return (
    <>
      <Navbar />
      <Container fluid className={classes.Ccourses_main}>
        <Row>
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
          <Col className={classes.Ccourses_banner}><img src={image} /></Col>
        </Row>
        <Row>
          <Col className={classes.Ccourses_items}>
            <div className={classes.Ccourses_item}>
              <div className={classes.Ccourses_item_left}>
                <h1>Front End Development</h1>
                <p>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.</p>
                <button>Read More<span><MdOutlineArrowRightAlt style={{marginLeft:"5px",fontSize:"1.3em"}} /></span></button>
              </div>
              <div className={classes.Ccourses_item_image}><img src={FrontEndImage} /></div>
            </div>
            <div className={classes.Ccourses_item}>
              <div className={classes.Ccourses_item_left}>
                <h1>Back End Development</h1>
                <p>Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website. It focuses primarily on databases, backend logic, APIs, and Servers.</p>
                <button>Read More<span><MdOutlineArrowRightAlt style={{marginLeft:"5px",fontSize:"1.3em"}} /></span></button>
              </div>
              <div className={classes.Ccourses_item_image}><img src={FrontEndImage} /></div>
            </div>
            <div className={classes.Ccourses_item}>
              <div className={classes.Ccourses_item_left}>
                <h1>Cloud Computing</h1>
                <p>Simply put, cloud computing means storing and accessing data over the internet instead of a hard disk. It is defined as a service that provides users to work over the internet. Users can access data on the Cloud and must provide a user ID and password to gain entry, for security reasons.</p>
                <button>Read More<span><MdOutlineArrowRightAlt style={{marginLeft:"5px",fontSize:"1.3em"}} /></span></button>
              </div>
              <div className={classes.Ccourses_item_image}><img src={FrontEndImage} /></div>
            </div>
            <div className={classes.Ccourses_item}>
              <div className={classes.Ccourses_item_left}>
                <h1>Mobile Application</h1>
                <p>A mobile application, most commonly referred to as an app, is a type of application software designed to run on a mobile device, such as a smartphone or tablet computer. Mobile applications frequently serve to provide users with similar services to those accessed on PCs.</p>
                <button>Read More<span><MdOutlineArrowRightAlt style={{marginLeft:"5px",fontSize:"1.3em"}} /></span></button>
              </div>
              <div className={classes.Ccourses_item_image}><img src={FrontEndImage} /></div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer /> 
    </>
  )
}

export default ComCourses