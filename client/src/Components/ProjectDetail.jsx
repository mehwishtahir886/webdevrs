import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container, Col, Row } from 'react-bootstrap'
import classes from './ProjectDetail.module.css'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const ProjectDetail = () => {

  const slideImages = [
    {
      url: 'https://i.ytimg.com/vi/MsoJQzG2FUU/maxresdefault.jpg',
    },
    {
      url: 'https://i.ytimg.com/vi/nhflyhYr40w/maxresdefault.jpg',
    },
    {
      url: 'https://i.ytimg.com/vi/TD3zXwYoIC4/maxresdefault.jpg',
    },
  ];


  return (
    <>

        <Navbar />
            <Container className={classes.detail_container} fluid>
                  <h1 className={classes.detail_heading}>Detailed Project Name</h1>
              <Row style={{marginBottom: "20px"}}>
                <Col lg={8}>

                  <div className={classes.slideContainer}>
                    <Slide>
                    {slideImages.map((slideImage, index)=> (
                        <div  className={classes.slides} key={index}>
                          <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                          </div>
                        </div>
                      ))}
                    </Slide>
                  </div>

                  <Row style={{marginBottom: "20px"}}>
                    <Col lg={5}>
                        <img width={"100%"} height={"100%"} src="https://comeout.netlify.app/demo/default/img/blog/signle-blog-thum-1.jpg" alt="" />
                    </Col>
                    <Col lg={7}>
                      <h5 style={{color: "rgb(70,198,206)"}}>Heading1</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae architecto beatae vitae dicta sunt explicabo.</p>
                    </Col>
                  </Row>
                      
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, iure quod reprehenderit quo dolorem at nihil officia eos voluptates quidem doloremque animi molestiae odit deleniti quae quas, corporis placeat eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, iure quod reprehenderit quo dolorem at nihil officia eos voluptates quidem doloremque animi molestiae.</p>
                      
                  <Row>
                    <Col lg={7}>
                      <h5 style={{color: "rgb(70,198,206)"}}>Heading2</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae architecto beatae vitae dicta sunt explicabo.</p>
                    </Col>
                    <Col lg={5}>
                        <img width={"100%"} height={"100%"} src="https://comeout.netlify.app/demo/default/img/blog/signle-blog-thum-2.jpg" alt="" />
                    </Col>
                  </Row>

                </Col>
                <Col className={classes.col_right} lg={4}>
                  <div>
                  <h1 className={classes.rightHeading}>Project Info</h1>
                  <p className={classes.detail_para}><a href="">Front End</a> / <a href="">HTML & CSS</a></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreu fugiat nulla pariatur.</p>
                  <h1 className={classes.rightHeading}>Skills</h1>  
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Javascript</span>
                  <span>Jqurey</span>
                  <span>Bootstrap</span>
                  <span>React</span>
                  <h1 className={classes.rightHeading} style={{marginTop: "10px"}}>Url</h1>
                  <a href="" style={{color: "black", textDecoration: "none"}}>https://www.google.com/</a>  
                </div>
                </Col>
              </Row>

            </Container>
        <Footer />

    </>
  )
}

export default ProjectDetail