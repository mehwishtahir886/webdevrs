

import React from 'react'
import classes from './Services.module.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import { AiOutlineSchedule,AiOutlineFileProtect } from "react-icons/ai";
import {BiBriefcase} from 'react-icons/bi'
import {FiUserCheck} from 'react-icons/fi'
import {TbWorld} from 'react-icons/tb'
import {RiTodoLine} from 'react-icons/ri'

const Services = () => {
  return (
    <>


      {/* //////////////////////////////////////////////////// */}

<div className={classes.par}>




      <Container className={classes.border} >

        <Row>
          {/* //1// */}

          <Col className={` ${classes.flex}`} xl={4} lg={4} md={6} sm={6}  >

            <div className={classes.main}>

              <div className={classes.icon} >
               <AiOutlineSchedule/>
                <span className={classes.ico1}></span>
                <span className={classes.icoo1}></span>

              </div>

              <h1 className={classes.heading} >
                FLEXIBLE SCHEDULING
              </h1>

              <div className={classes.content} >

                Student choose their own study <br />
                schedule.


              </div>

        

            </div>



          </Col>
          {/* //2// */}
          <Col className={`${classes.flex}`} xl={4} lg={4} md={6} sm={6}  >

            <div className={classes.main}>

              <div className={classes.icon} >
              <AiOutlineFileProtect/>

                <span className={classes.ico2}></span>
                <span className={classes.icoo2}></span>

              </div>

              <h1 className={classes.heading} >
                OPEN ENROLLMENT
              </h1>

              <div className={classes.content} >

                Student can start their boot <br />
                camps anytime - you can enroll <br />
                tody !


              </div>

            </div>



          </Col>

          {/* //3// */}
          <Col className={` ${classes.flex}`} xl={4} lg={4} md={6} sm={6} >

            <div className={classes.main}>


              <div className={classes.icon} >
               <BiBriefcase/>
                <span className={classes.ico3}></span>
                <span className={classes.icoo3}></span>


              </div>

              <h1 className={classes.heading} >
                JOB PLACEMENT
              </h1>

              <div className={classes.content} >
                We offer job placement training<br />
                and assistance to our graduates <br />



              </div>

            </div>

          </Col>


        {/* </Row> */}

        {/* /////////////////////////////// */}
        {/* <Row> */}

          {/* //4// */}
          <Col className={` ${classes.flex}`} xl={4} lg={4} md={6} sm={6} >

            <div className={classes.main} >

              <div className={classes.icon} >
              <TbWorld/>
                <span className={classes.ico4}></span>
                <span className={classes.icoo4}></span>

              </div>

              <h1 className={classes.heading} >
                HYBRID TRAINING
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

            <div className={classes.main}>

              <div className={classes.icon} >
              <FiUserCheck/>
              <span className={classes.ico5}></span>
                <span className={classes.icoo5}></span>

              </div>

              <h1 className={classes.heading} >
                SELF-PACED
              </h1>

              <div className={classes.content} >
                you can move through your studies<br />
                at your own screen  <br />


              </div>

            </div>

          </Col>

          {/* //6// */}
          <Col className={` ${classes.flex}`} xl={4} lg={4} md={6} sm={6} >

            <div className={classes.main}>

              <div className={classes.icon} >
              <RiTodoLine/>
              <span className={classes.ico6}></span>
                <span className={classes.icoo6}></span>
            

              </div>

              <h1 className={classes.heading} >
                THOROUGH CURRICULUM
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