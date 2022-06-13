
import React from 'react'
import classes from './Roadmap.module.css';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import chose from '../images/wewe.png'
import learning from '../images/start.png'
import hired from '../images/hired.png'


const Roadmap = () => {
    return (
        <>

                  <Container className={classes.con}>

                  

            {/* row 1 */}

            <Row className={classes.row} >


                <div className={classes.imgp} >

                    <img className={classes.img} src={chose } alt="" />

                </div>


                <div className={classes.pa}>
                    <h5>Step 1 :</h5>
                    <h1>Chose A Programme .</h1>
                    <p>
                    Partner with an Admissions Rep to talk about your career goals and choose the right program for you. Then, choose from a range of student-friendly payment options, such as paying upfront, month to month, or deferring tuition until after you're hired.
                    </p>
                </div>

            </Row>



            {/* //////////////////////////////////////////// */}

            {/* row 2 */}

            <Row className={classes.row} >

                <div className={classes.pa}>
                    <h5>Step 2 :</h5>
                    <h1>Start Learning .</h1>
                    <p>
                    Learn the skills to break into a new career, with a dedicated team by your side. You'll have the full support of your personal mentor, Academic Success Manager, and expert, on-demand help via live chat. Study part-time while working, or full-time to speed up your career change.
                    </p>
                </div>

                <div className={classes.imgp} >

                    <img className={classes.img} src={learning} alt="" />

                </div>


            </Row>

            {/* /3/ */}


            <Row className={classes.row} >


                <div className={classes.imgp} >

                    <img className={classes.img} src={hired} alt="" />

                </div>


                <div className={classes.pa}>
                    <h5>Step 3 :</h5>
                    <h1>Get Hired .</h1>
                    <p>
                    Follow up your program with 6 months of career support. Your career coach will help you tailor your portfolio and resume, create a target employer list, nail your interviews, and negotiate for the highest salary.
                    </p>
                </div>

            </Row>

            </Container>

            {/* ////////////////// */}



        </>
    )
}

export default Roadmap