import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container, Col, Row } from 'react-bootstrap'
import classes from './ProjectDetail.module.css'
import './ComCourses.css'

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
              <Row style={{marginBottom: "20px"}}>
                <Col lg={8}>
                  <h1 className={classes.detail_heading}>Detailed Project Name</h1>

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

                </Col>
                <Col className={classes.col_right} lg={4}>
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
                </Col>
              </Row>

            </Container>
        <Footer />

    </>
  )
}

export default ProjectDetail