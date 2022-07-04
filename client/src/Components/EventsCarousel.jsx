import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import {Row,Col } from "react-bootstrap"
import Event1 from "../images/Event1.jpg"
import { AiOutlineBook } from "react-icons/ai";
import classes from "./Events.module.css"
import "./Carousel.module.css"
import { BsArrowRight } from "react-icons/bs";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2, },
];

const EvenetCarousel = () => {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6,]);
    return (
        <>
            <div className={classes.App}>
            <div className="carousel_wrapper2">
                    <Carousel breakPoints={breakPoints} >
                        {items.map((item) => (
                        <Col className={classes.Gallery_part1} xl={10} lg={11} md={10} sm={10}>
                        <div className={classes.Gallery_part1_img}>
                            <div className={classes.EventOverlay}></div>
                            <img className={classes.Eventimg} src={Event1}/>
                        </div>
                        <div className={classes.Gallery_part1_content}>
                            <div className={classes.content_inner}>
                                <h6 className={classes.EventDate} >
                                    29 july,1998
                                </h6>
                                <h5 className={classes.EventHEading}>
                                    Seminaars in College
                                </h5>
                                <p className={classes.EventDescreption}>
                                    Lorem ipsum dolor sit amet consectetur, dolorum rerum facilis. Molestias ipsum sunt maiores corporis cupiditate delectus nisi earum eaque quo obcaecati.
                                </p>
                            </div>
                            <BsArrowRight className={classes.EventArrow}/>
                        </div>
                    </Col>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default EvenetCarousel