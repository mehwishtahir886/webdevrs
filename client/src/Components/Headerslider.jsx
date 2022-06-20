import React from 'react'
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import classes from './Roadmap.module.css';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import chose from '../images/one.png'
import learning from '../images/two.png'
import hired from '../images/three.png'

const Headerslider = () => {
    return (
        <div className="slide-container">

            <Slide className={classes.slide} >

                {/* 1 */}

                <div className={classes.row} >



                    <div className={classes.mrow}>



                        <div className={classes.sip} >


                            <div className={classes.imgp} >

                                <img className={classes.img} src={chose} alt="" />

                            </div>


                            <div className={classes.pa}>

                            <h4>Step 1 :</h4>

                                <h1>Chose A Programme .</h1>
                                
                                <p>
                                    Partner with an Admissions Rep to talk about your career goals and choose the right program for you. Then, choose from a range of student-friendly payment options, such as paying upfront, month to month, or deferring tuition until after you're hired.
                                </p>

                            </div>


                        </div>

                    </div>





                </div>

                {/* ///////////////////////////// */}

                {/* 2 */}


                <div className={classes.row} >

                    <div className={classes.mrow}>


                        <div className={classes.sip} >

                            <div className={classes.imgp} >

                                <img className={classes.img} src={learning} alt="" />

                            </div>

                            <div className={classes.pa}>
                            <h4>Step 2 :</h4>

                                <h1>Start Learning .</h1>
                        <p>
                            Learn the skills to break into a new career, with a dedicated team by your side. You'll have the full support of your personal mentor, Academic Success Manager, and expert, on-demand help via live chat. Study part-time while working, or full-time to speed up your career change.
                        </p>

                            </div>


                        </div>



                    </div>


                </div>

                {/* ///////////////////////////////////// */}

                {/* 3 */}

                <div className={classes.row} >

                    <div className={classes.mrow}>



                        <div className={classes.sip} >


                            <div className={classes.imgp} >

                                <img className={classes.img} src={hired} alt="" />

                            </div>

                            <div className={classes.pa}>

                            <h4>Step 3 :</h4>
                                <h1>Get Hired .</h1>
                              <p>
                            Follow up your program with 6 months of career support. Your career coach will help you tailor your portfolio and resume, create a target employer list, nail your interviews, and negotiate for the highest salary.
                            </p>
                            </div>



                        </div>



                    </div>




                </div>


                {/* //////////////////////////////////// */}

            </Slide>

        </div>
    )
}

export default Headerslider;