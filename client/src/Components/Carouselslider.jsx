import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./ItemCarousel";
import classes from "./Carousel.module.css"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 ,},
];

const Carouselslider = () => {
    const [items, setItems] = useState([1, 2, 3, 4 ,5,6,]);
    return (
        <>
            <div className={classes.App}>
                <div className={classes.carousel_wrapper}>
                    <Carousel breakPoints={breakPoints}>
                        {items.map((item) => (
                            <Item >{item}</Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Carouselslider