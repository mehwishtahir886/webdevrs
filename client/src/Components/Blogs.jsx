import React from 'react'
import {Container,Row} from "react-bootstrap"
import classes from "./Blogs.module.css"
// import image from '../images/BlogBack.jpg'
import BlogsData from "./BlogsData"
const Blogs = () => {
    console.log('====================================');
    console.log(BlogsData);
    console.log('====================================');
    const BlogsMap = BlogsData.map((item)=>{
        return(
            <>
            <Row>
                <div className={classes.BlogCard}>
                    <div className={classes.BlogBackImage}>
                        <img className={classes.BlogBackImage} src={item.BackImage}  />
                        
                        {/* <img className={classes.Blogbimage} src=''/> */}
                    </div>
                </div>
            </Row>
            </>
        )
    })
  return (
    <>
    <Container fluid className={classes.MainBlogg}>
        {BlogsMap}
    </Container>
    </>
  )
}

export default Blogs