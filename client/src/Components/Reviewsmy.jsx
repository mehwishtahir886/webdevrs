import React from 'react'
import classes from './Reviews.module.css';
import { RiStarSLine } from "react-icons/ri";

import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

const Reviewsmy = ({ rev }) => {
    console.log(rev, 'my');
    return (
        <>

            <Col xl={6} lg={6} md={6} sm={12} >

                {/* <div className={classes.mrev}> */}


                <div className={classes.rev} >

                    <div className={classes.port}>
                        <img src={rev.img} alt="" />
                        <div className={classes.fr}>
                            <h4>{rev.name}</h4>
                            <div className={classes.ed}>
                                <h6>{rev.degree}</h6>
                            </div>
                        </div>
                    </div>

                    <p>{rev.message}</p>

                    <button className={classes.brev} >
                        Read More
                    </button>

                    <div className={classes.bot}>

                        <div className={classes.stars}>
                            <RiStarSLine className={classes.s} />
                            <RiStarSLine className={classes.s} />
                            <RiStarSLine className={classes.s} />
                            <RiStarSLine className={classes.s} />
                            <RiStarSLine className={classes.s} />
                        </div>
                        <div className={classes.date}>{rev.date}</div>

                    </div>

                    {/* <img className={classes.stars} src={rev.stars} alt="" /> */}

                    {/* </div> */}


                </div>


            </Col>

        </>
    )
}

export default Reviewsmy