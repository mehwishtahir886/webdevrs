import React from 'react'
import { Container, Row } from "react-bootstrap"
import classes from "./Blogs.module.css"
import Navbar from "./Navbar"
import "./Navbar.css"
import BlogsData from "./BlogsData"
const Blogs = () => {
    console.log('====================================');
    console.log(BlogsData);
    console.log('====================================');
    const BlogsMap = BlogsData.map((item) => {
        return (
            <>
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
                            <p className={classes.BolgDtime}>{item.DateTime}</p>
                            <div className={classes.BlogRef}>
                                Exective Eaducation
                            </div>
                        </div>
                    </div>
                </Row>
            </>
        )
    })
    return (
        <>
            <Navbar />
            <Container fluid className={classes.MainBlogg}>
                {BlogsMap}
            </Container>
        </>
    )
}

export default Blogs