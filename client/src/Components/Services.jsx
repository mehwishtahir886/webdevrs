

import React from 'react'
import classes from './Services.module.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import booksImage from '../images/BOOKS DROP/Custom_Size___13.png'
import circulum11Image from '../images/CRICULUM/Custom_Size___11.png'
import circulum8Image from '../images/CRICULUM/Custom_Size___8.png'

import settingimage1 from '../images/HAND SETTING/Custom_Size___23.png'
import settingimage2 from '../images/HAND\ SETTING/Custom_Size___24.png'

import phone from '../images/MOBILE/phone.png'
import setting from '../images/MOBILE/setting.png'

import handimage1 from '../images/HAND SHAKE/Custom_Size___26.png'
import handimage2 from '../images/HAND SHAKE/Custom_Size___27.png'
import handimage3 from '../images/HAND SHAKE/Custom_Size___28.png'

import scheduleimage1 from '../images/SHADULE/Custom_Size___6.png' 
import scheduleimage2 from '../images/SHADULE/Custom_Size___12.png' 

const Services = () => {
  return (
    <>


      {/* //////////////////////////////////////////////////// */}

<div className={classes.par}>
      <Container className={classes.border} >
        <Row className={classes.row}>

        {/* heading */}

      <Col className={classes.headingser} xl={12} lg={12} md={12} sm={12} >
        <p>Why Choose Us<span>?</span></p>
        <p>It's often not the business itself that makes a company unique; it's the people, their approach, the intangible elements</p>
      </Col>
          {/* //1// */}

          <Col className={`${classes.flex}`} xl={4} lg={4} md={6} sm={6}  >
            <div className={classes.main}>
              <div className={classes.icon} >
                <img src={booksImage} alt="" />
                <img src={booksImage} alt="" />
                <img src={booksImage} alt="" />
              </div>
              <h1 className={classes.heading}>Flexible Scheduling</h1>
              <div className={classes.content}>Student choose their own study <br /> schedule.</div>
            </div>
          </Col>
          {/* //2// */}
          <Col className={`${classes.flex}`} xl={4} lg={4} md={6} sm={6}  >
            <div className={classes.main1}>
              <div className={classes.icon1} >
                <img src={circulum8Image} alt="" />
                <img src={circulum8Image} alt="" />
                <img src={circulum11Image} alt="" />
              </div>
              <h1 className={classes.heading} >
                Open Enrollment
              </h1>
              <div className={classes.content}>Student can start their boot <br />camps anytime - you can enroll <br />tody !</div>
            </div>
          </Col>

          {/* //3// */}
          <Col className={` ${classes.flex}`} xl={4} lg={4} md={6} sm={6} >
            <div className={classes.main2}>
              <div className={classes.icon2} >
                <img src={settingimage1} alt="" />
                <img src={settingimage2} alt="" />
              </div>
              <h1 className={classes.heading} >
                Job Placement
              </h1>
              <div className={classes.content} >
                We offer job placement training<br />
                and assistance to our graduates <br />
              </div>
            </div>
          </Col>

          {/* //4// */}
          <Col className={` ${classes.flex}`} xl={4} lg={4} md={6} sm={6} >
            <div className={classes.main3} >
              <div className={classes.icon3} >
                <img src={setting} alt="" />
                <img src={setting} alt="" />
                <img src={phone} alt="" />
              </div>
              <h1 className={classes.heading} >
                Hybric Training
              </h1>
              <div className={classes.content} >
                Students can study online , in-<br />
                person at our Portland campuse or  <br />
                both
              </div>
            </div>
          </Col>

          {/* //5// */}
          <Col className={` ${classes.flex}`} xl={4} lg={4} md={6} sm={6} >
            <div className={classes.main4}>
              <div className={classes.icon4} >
                <img src={handimage1} alt="" />
                <img src={handimage2} alt="" />
                <img src={handimage3} alt="" />
              </div>
              <h1 className={classes.heading} >
                Self-Paced
              </h1>
              <div className={classes.content} >
                you can move through your studies<br />
                at your own screen  <br />
              </div>
            </div>
          </Col>

          {/* //6// */}
          <Col className={` ${classes.flex}`} xl={4} lg={4} md={6} sm={6} >
            <div className={classes.main5}>
              <div className={classes.icon5} >
                <img src={scheduleimage1} alt="" />
                <img src={scheduleimage2} alt="" />
              </div>
              <h1 className={classes.heading} >
                Thorough Curriculm
              </h1>
              <div className={classes.content} >
                Our boot camps cover several in-<br />
                demand programming languages.
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      </div>


    </>
  )
}

export default Services