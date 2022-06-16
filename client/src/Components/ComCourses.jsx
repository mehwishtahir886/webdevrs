import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import './ComCourses.css'

import { AiFillCheckCircle } from "react-icons/ai"
import { Container, Row, Col } from 'react-bootstrap'
import classes from './ComCourses.module.css'
import logo from '../images/logo.png'
import C1 from '../images/frontend.png'
import C2 from '../images/backend.png'
import C3 from '../images/cloud.png'
import C4 from '../images/mobile.png'
import C_banner_icon1 from '../images/VExtor___1.png'
import C_banner_icon2 from '../images/VExtor___2.png'

import Nav from 'react-bootstrap/Nav';

import LanguageImage1 from '../images/HTML.jpg'
import LanguageImage2 from '../images/CSS.jpg'
import LanguageImage3 from '../images/Javascript.jpg'
import LanguageImage4 from '../images/BootStarrp.jpg'
import LanguageImage5 from '../images/tailment CSS.jpg'
import LanguageImage6 from '../images/JQuerry.jpg'
import LanguageImage7 from '../images/GITHUB.jpg'
import LanguageImage8 from '../images/Redux.jpg'

import Carouselslider from './Carouselslider'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
              <li><AiFillCheckCircle className={classes.Ccourses_banner_info_icons} /><span>Designing front end interfaces and user experiences.</span></li>
            </ul>
          </Col>
          <Col className={classes.Ccourses_banner}>
            <div className={classes.Ccourses_banners}>
              <div className={classes.C_banner__icon_main}><img src={C_banner_icon1} /></div>
              <span>Front End Development</span>
            </div>
            <div className={classes.Ccourses_banners}>
              <div className={classes.C_banner__icon_main}><img src={C_banner_icon2} /></div>
              <span>Cloud Computing</span>
            </div>
            <div className={classes.Ccourses_banners}>
              <div className={classes.C_banner__icon_main}><img src={C2} /></div>
              <span>Back End Development</span>
            </div>
            <div className={classes.Ccourses_banners}>
              <div className={classes.C_banner__icon_main}><img src={C4} /></div>
              <span>Mobile Application</span>
            </div>
            <div className={classes.Ccourses_banners_logo}>
              <div className={classes.C_banner__icon_main}><img src={logo} /></div>
            </div>
          </Col>
          <div id='maintabs' className={classes.main_tabs}>
          {/* <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled">
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav> */}
            <Tabs
              className={classes.tabs}
              defaultActiveKey="Front-end-development"
              id="uncontrolled-tab-example"
            >
              <Tab eventKey="Front-end-development" title="Front-end-development">
                <Row>
                  <Col className={classes.Ccourses_items}>
                    <div className={classes.Ccourses_item}>
                      <div className={classes.Ccourses_item_main}>
                        <div className={classes.Ccourses_item_left}>
                          <h1>Front End Development</h1>
                          <p>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.</p>
                        </div>
                        <div className={classes.Ccourses_item_image}><img src={C1} /></div>
                      </div>
                      <div className={classes.Ccourses_item_projects}>
                        <div>
                          <div><img src={LanguageImage1} /></div>
                          <span>HTML</span>
                        </div>
                        <div>
                          <div><img src={LanguageImage2} /></div>
                          <span>CSS</span>
                        </div>
                        <div>
                          <div><img src={LanguageImage3} /></div>
                          <span>Javascript</span>
                        </div>
                        <div>
                          <div><img src={LanguageImage4} /></div>
                          <span>Bootstrap</span>
                        </div>
                        <div>
                          <div><img src={LanguageImage5} /></div>
                          <span>Tailwind css</span>
                        </div>
                        <div>
                          <div><img src={LanguageImage6} /></div>
                          <span>Jquery</span>
                        </div>
                        <div>
                          <div><img src={LanguageImage7} /></div>
                          <span>Git Hub</span>
                        </div>
                        <div>
                          <div><img src={LanguageImage8} /></div>
                          <span>Redux</span>
                        </div>
                      </div>
                      <div className={classes.Ccourses_item_carousel}>
                        <Carouselslider />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="Back-end-development" title="Back-end-development">
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
              </Tab>
              <Tab eventKey="Cloud-computing" title="Cloud-computing">
                <div className={classes.Ccourses_item}>
                  <div className={classes.Ccourses_item_main}>
                    <div className={classes.Ccourses_item_left}>
                      <h1>Cloud Computing</h1>
                      <p>Simply put, cloud computing means storing and accessing data over the internet instead of a hard disk. It is defined as a service that provides users to work over the internet. Users can access data on the Cloud and must provide a user ID and password to gain entry, for security reasons.</p>
                    </div>
                    <div className={classes.Ccourses_item_image}><img src={C3} /></div>
                  </div>
                  <div className={classes.Ccourses_item_carousel}>
                    <Carouselslider />
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Mobile-application" title="Mobile-application">
                <div className={classes.Ccourses_item}>
                  <div className={classes.Ccourses_item_main}>
                    <div className={classes.Ccourses_item_left}>
                      <h1>Mobile Application</h1>
                      <p>A mobile application, most commonly referred to as an app, is a type of application software designed to run on a mobile device, such as a smartphone or tablet computer. Mobile applications frequently serve to provide users with similar services to those accessed on PCs.</p>
                    </div>
                    <div className={classes.Ccourses_item_image}><img src={C4} /></div>
                  </div>
                  <div className={classes.Ccourses_item_carousel}>
                    <Carouselslider />
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default ComCourses