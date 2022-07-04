import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import classes from "./Blogs.module.css"
import {Row } from "react-bootstrap"
import { AiOutlineBook } from "react-icons/ai";
import "./Carousel.module.css"
import BlogsData from "./BlogsData"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3, },
];

const BlogCarousel = () => {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6,]);
    return (
        <>
            <div className={classes.App}>
                <div className="carousel_wrapper2">
                    <Carousel breakPoints={breakPoints} >
                        {BlogsData.map((item) => (
                <Row>
                <div className={classes.BlogCard}>
                    <div className={classes.BlogBackIma}>
                        <img className={classes.BlogBackImage} src={item.BackImage} />
                    </div>
                    <div className={classes.BlogHeadUser}>
                        <div className={classes.Bloguserima}>
                            <img src={item.UserImage} className={classes.Blogusrimg} />
                        </div>
                        <div className={classes.Blogusrinfo} >
                            <p className={classes.blogusrName}>{item.Name}</p>
                            <p className={classes.blogusrName}>{item.Title}</p>
                        </div>
                    </div>
                    <h5 className={classes.Blogusrheading}>
                        {item.Head}
                    </h5>
                    <p className={classes.BlogDesp}>
                        {item.Description}
                    </p>
                    <div className={classes.BlogFooter}>
                        <div className={classes.BlogRef}>
                            <AiOutlineBook className={classes.BlogBook} /> Exective Eaducation
                        </div>
                        <p className={classes.BolgDtime}>{item.DateTime}</p>
                    </div>
                </div>
            </Row>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default BlogCarousel