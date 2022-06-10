import React from 'react'
import classes from './Courses.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import { AiFillCheckCircle } from "react-icons/ai"

const Courses = () => {
  return (
    <>
      <Container fluid className={classes.courses_container}>
        <Row style={{height: "100%"}}>
            <Col md={6} className={classes.courses_info}>
              <p>Full Stack Development</p>
              <p>WebCoderz</p>
              <p>Essentially, it's any web development project that would normally require both a front end developer and back end developer — but instead, a full stack developer fills the role of both</p>
              <ul>
                <li><AiFillCheckCircle className={classes.courses_info_icons} /><span>Supporting development efforts from projects.</span></li>
                {/* <li><AiFillCheckCircle className={classes.courses_info_icons} /><span>Supporting development efforts from projects. conceptualization to launch.</span></li> */}
                <li><AiFillCheckCircle className={classes.courses_info_icons} /><span>Prototyping and building applications and/or websites.</span></li>
                <li><AiFillCheckCircle className={classes.courses_info_icons} /><span>Designing front end interfaces and user experiences.</span></li>
              </ul>
              <div className={classes.courses_bullets}>
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
            <Col md={6} style={{padding:"0"}}>
              <Container fluid>
                <Row className={classes.courses_St} style={{height: "100vh"}}>
                  <div className={classes.courses_St1}>
                    <h5 className={classes.courses_St_Heading}>Front End Development</h5>
                    <p className={classes.courses_St_Para}>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.</p>
                    <div className={classes.courses_St_Info}>
                      <div className={classes.courses_St_Info1}>
                        <p>Duration<span>*</span></p>
                        <p>4-Months</p>
                      </div>
                      <div className={classes.courses_St_Info1}>
                        <p>Learning<span>*</span></p>
                        <p>Professional Level</p>
                      </div>
                    </div>
                    <div className={classes.courses_St_Info2}>
                      <p>Skills to be Learned<span>*</span></p>
                      <div className={classes.courses_St_Info3}>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>Javascript</div>
                        <div>React</div>
                        <div>Tailwind css</div>
                        <div>Git Hub</div>
                        <div>Bootstrap</div>
                      </div>
                    </div>
                    <button className={classes.courses_St_btn}>View Relative Projects</button>
                  </div>
                </Row>
                <Row className={classes.courses_St} style={{height: "100vh"}}>
                <div className={classes.courses_St1}>
                    <h5 className={classes.courses_St_Heading}>Back End Development</h5>
                    <p className={classes.courses_St_Para}>Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website. It focuses primarily on databases, backend logic, APIs, and Servers.</p>
                    <div className={classes.courses_St_Info}>
                      <div className={classes.courses_St_Info1}>
                        <p>Duration<span>*</span></p>
                        <p>4-Months</p>
                      </div>
                      <div className={classes.courses_St_Info1}>
                        <p>Learning<span>*</span></p>
                        <p>Professional Level</p>
                      </div>
                    </div>
                    <div className={classes.courses_St_Info2}>
                      <p>Skills to be Learned<span>*</span></p>
                      <div className={classes.courses_St_Info3}>
                        <div>Flutter</div>
                        <div>React(Native)</div>
                      </div>
                    </div>
                    <button className={classes.courses_St_btn}>View Relative Projects</button>
                  </div>
                </Row>
                <Row className={classes.courses_St} style={{height: "100vh"}}>
                <div className={classes.courses_St1}>
                    <h5 className={classes.courses_St_Heading}>Cloud Computing</h5>
                    <p className={classes.courses_St_Para}>Simply put, cloud computing means storing and accessing data over the internet instead of a hard disk. It is defined as a service that provides users to work over the internet. Users can access data on the Cloud and must provide a user ID and password to gain entry, for security reasons.</p>
                    <div className={classes.courses_St_Info}>
                      <div className={classes.courses_St_Info1}>
                        <p>Duration<span>*</span></p>
                        <p>2-Months</p>
                      </div>
                      <div className={classes.courses_St_Info1}>
                        <p>Learning<span>*</span></p>
                        <p>Professional Level</p>
                      </div>
                    </div>
                    <div className={classes.courses_St_Info2}>
                      <p>Skills to be Learned<span>*</span></p>
                      <div className={classes.courses_St_Info3}>
                        <div>Docker Heroku</div>
                        <div>Kubernetes</div>
                      </div>
                    </div>
                    <button className={classes.courses_St_btn}>View Relative Projects</button>
                  </div>
                </Row>
                <Row className={classes.courses_St} style={{height: "100vh"}}>
                <div className={classes.courses_St1}>
                    <h5 className={classes.courses_St_Heading}>Mobile Application</h5>
                    <p className={classes.courses_St_Para}>A mobile application, most commonly referred to as an app, is a type of application software designed to run on a mobile device, such as a smartphone or tablet computer. Mobile applications frequently serve to provide users with similar services to those accessed on PCs.</p>
                    <div className={classes.courses_St_Info}>
                      <div className={classes.courses_St_Info1}>
                        <p>Duration<span>*</span></p>
                        <p>2-Months</p>
                      </div>
                      <div className={classes.courses_St_Info1}>
                        <p>Learning<span>*</span></p>
                        <p>Professional Level</p>
                      </div>
                    </div>
                    <div className={classes.courses_St_Info2}>
                      <p>Skills to be Learned<span>*</span></p>
                      <div className={classes.courses_St_Info3}>
                        <div>Node Js</div>
                          <div>Express</div>
                          <div>Javascript</div>
                          <div>Mongo DB</div>
                          <div>MySQL</div>
                        </div>
                    </div>
                    <button className={classes.courses_St_btn}>View Relative Projects</button>
                  </div>
                </Row>
              </Container>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Courses