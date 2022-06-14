import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./ItemCarousel";
import classes from "./Carousel.module.css"
import CardImage from "../images/Laptop.png"
import "./Carousel.module.css"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3, },
];

const Carouselslider = () => {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6,]);
    return (
        <>
            <div className={classes.App}>
                <div className={classes.carousel_wrapper}>
                    <Carousel breakPoints={breakPoints}>
                        {items.map((item) => (
                            <Item >
                                <div className={classes.MianCard}>
                                    <div className={classes.cardHead}>Independent Project</div>
                                    <div className={classes.cardImage}>
                                        <img className={classes.cardimg} src={CardImage} />
                                    </div>
                                    <h5 className={classes.CardHeading} style={{ textAlign: "center" }}>Experience build building <br /> a Google News like App </h5>
                                    <p className={classes.CardPara}>Build Highly Responsive Websites <br /> Fronteend For App</p>
                                    <div className={classes.CardLanguage}>
                                        <div className={classes.Lang1}>HTML</div>
                                        <div className={classes.Lang1}>CSS</div>
                                        <div className={classes.Lang1}>Javascript</div>
                                        <div className={classes.Lang1}>React.js</div>
                                    </div>
                                </div>
                            </Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Carouselslider