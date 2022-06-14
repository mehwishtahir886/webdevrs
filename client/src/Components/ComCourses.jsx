import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { AiFillCheckCircle } from "react-icons/ai"
import { Container,Row,Col } from 'react-bootstrap'
import classes from './ComCourses.module.css'
import C1 from '../images/Cvector.png'
import C2 from '../images/Cvector1.jfif'
import C3 from '../images/Cvector2.jfif'
import C4 from '../images/Cvector3.jfif'
// import C_banner_icon1 from '../images/vector-main-courses/VExtor – 3.png'
// import C_banner_icon2 from '../images/vector-main-courses/VExtor – 2.png'
// import C_banner_icon3 from '../images/vector-main-courses/VExtor – 5.png'
// import C_banner_icon4 from '../images/vector-main-courses/VExtor – 4.png'
import Carouselslider from './Carouselslider'

const ComCourses = () => {
  return (
    <>
      <Navbar />
      <Container fluid className={classes.Ccourses_main}>
        <Row>
          <Col className={classes.Ccourses_banner_info}>
              <p>We've a unique Courses</p>
              <p>WebDevrs</p>
              <p>A Web Designing course belongs to the field of Computer Science and IT. It enables students to learn various techniques, tools and programming languages in order to create and maintain web pages. There is an array of courses in this field ranging from certificate and Diploma courses to UG, PG and PGDM programs.</p>
              <ul>
                <li><AiFillCheckCircle className={classes.Ccourses_banner_info_icons} /><span>Supporting development efforts from projects.</span></li>
                <li><AiFillCheckCircle className={classes.Ccourses_banner_info_icons} /><span>Prototyping and building applications and/or websites.</span></li>
                <li><AiFillCheckCircle className={classes.Ccourses_banner_info_icons} /><span>Designing front end interfaces and user experiences.</span></li>
              </ul>
          </Col>
          <Col className={classes.Ccourses_banner}>
            <div className={classes.Ccourses_banners}>
              {/* <div className={classes.C_banner__icon_main}><img src={C_banner_icon1} /></div> */}
              <span>Front End Development</span>
            </div>
            <div className={classes.Ccourses_banners}>
              {/* <div className={classes.C_banner__icon_main}><img src={C_banner_icon2} /></div> */}
              <span>Front End Development</span>
            </div>
            <div className={classes.Ccourses_banners}>
              {/* <div className={classes.C_banner__icon_main}><img src={C_banner_icon3} /></div> */}
              <span>Front End Development</span>
            </div>
            <div className={classes.Ccourses_banners}>
              {/* <div className={classes.C_banner__icon_main}><img src={C_banner_icon4} /></div> */}
              <span>Front End Development</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className={classes.Ccourses_items}>
            <div className={classes.Ccourses_item}>
              <div className={classes.Ccourses_item_main}>
                <div className={classes.Ccourses_item_left}>
                  <h1>Front End Development</h1>
                  <p>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.</p>
                </div>
                <div className={classes.Ccourses_item_image}><img src={C3} /></div>
              </div>
              <div className={classes.Ccourses_item_carousel}>
                <Carouselslider />
              </div>
            </div>
            <div className={classes.Ccourses_item}>
              <div className={classes.Ccourses_item_main}>
                  <div className={classes.Ccourses_item_left}>
                  <h1>Back End Development</h1>
                  <p>Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website. It focuses primarily on databases, backend logic, APIs, and Servers.</p>
                </div>
                <div className={classes.Ccourses_item_image}><img src={C2} /></div>
              </div>
              <div className={classes.Ccourses_item_carousel}>
                <Carouselslider />
              </div>
            </div>
            <div className={classes.Ccourses_item}>
              <div className={classes.Ccourses_item_main}>
                  <div className={classes.Ccourses_item_left}>
                  <h1>Cloud Computing</h1>
                  <p>Simply put, cloud computing means storing and accessing data over the internet instead of a hard disk. It is defined as a service that provides users to work over the internet. Users can access data on the Cloud and must provide a user ID and password to gain entry, for security reasons.</p>
                </div>
                <div className={classes.Ccourses_item_image}><img src={C4} /></div>
              </div>
              <div className={classes.Ccourses_item_carousel}>
                <Carouselslider />
              </div>
            </div>
            <div className={classes.Ccourses_item}>
              <div className={classes.Ccourses_item_main}>
                  <div className={classes.Ccourses_item_left}>
                  <h1>Mobile Application</h1>
                  <p>A mobile application, most commonly referred to as an app, is a type of application software designed to run on a mobile device, such as a smartphone or tablet computer. Mobile applications frequently serve to provide users with similar services to those accessed on PCs.</p>
                </div>
                <div className={classes.Ccourses_item_image}><img src={C1} /></div>
              </div>
              <div className={classes.Ccourses_item_carousel}>
                <Carouselslider />
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