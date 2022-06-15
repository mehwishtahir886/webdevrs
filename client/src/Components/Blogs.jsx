import React from 'react'
import { Container, Row } from "react-bootstrap"
import classes from "./Blogs.module.css"
import Navbar from "./Navbar"
import "./Navbar.css"
import BlogsData from "./BlogsData"
import { AiOutlineBook } from "react-icons/ai";

const Blogs = () => {
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
                            <div className={classes.BlogRef}>
                                <AiOutlineBook className={classes.BlogBook} /> Exective Eaducation
                            </div>
                            <p className={classes.BolgDtime}>{item.DateTime}</p>
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
                <div className={classes.BlogSideBar}>
                    <h5 className={classes.BlogSideHead}>Blog Catagories</h5>
                        <li>All</li>
                        <li>Brand Startergy</li>
                        <li>Brand Support</li>
                        <li>Comminuactions</li>
                        <li>Culture</li>
                        <li>LeaderShip</li>
                        <li>News and Updates</li>
                        <li>Process</li>
                        <li>Visual Identity</li>
                        <li>In Conservation</li>
                </div>
                <Container className={classes.blogItemMain}>
                    {BlogsMap}
                </Container>
            </Container>
        </>
    )
}

export default Blogs