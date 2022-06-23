import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import classes from './About.module.css'
import { 
  Container,
  Row,
  Col,
 } from 'react-bootstrap'

import { IoIosArrowDown } from "react-icons/io";
import ceoImg from '../images/sir.jpeg'

const About = () => {
  return (
    <>
      <Navbar />
      <Container fluid className={classes.main_About}>
        <Container fluid className={classes.banner_About}>
          <div className={classes.banner_About_main} >
            <div className={classes.banner_About_content}>
                <h1>Info About members of that institute</h1>
                <p>A reflection of the purpose and personality of the business and its owners or top employees.</p>
            </div>

            <div className={classes.banner_About_icon} >
              <IoIosArrowDown style={{fontSize:"30px",cursor:"pointer"}} />
            </div>
          </div>
        </Container>
        <Container fluid className={classes.About_container}>
          <Row className={classes.About_container_intro}>
            <Col lg={6} md={12} className={classes.About_container_ColLeft}>
              <div className={classes.About_container_mainLeft}>
                <div className={classes.About_container_leftSides}>
                      <img src={ceoImg} />
                    <div className={classes.About_container_main_circle}>
                      <h4>Chairman</h4>
                      <p>Muhammad Iqbal</p>
                    </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} className={classes.About_container_ColRight}>
              <div className={classes.About_container_mainRight}>
                <h1>Chairman's Message</h1>
                <h5>Muhammad Iqbal</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi vitae repudiandae beatae cupiditate. Non, possimus facilis ut beatae inventore quod. Debitis corporis ea reiciendis pariatur ipsam blanditiis quia alias quam ad in! Harum dolores totam, rem voluptatibus praesentium quos. Impedit cum libero iste accusantium accusamus nobis nemo corporis et quasi! Distinctio consectetur optio blanditiis fuga aut numquam nostrum delectus provident amet illum, placeat commodi maxime aliquam officia eligendi officiis quo, tempora, perspiciatis eaque! Nobis esse, unde vitae quisquam labore voluptatibus ex maiores sit! Facilis laudantium illum quibusdam laborum praesentium ab molestias assumenda, est nemo ipsum eaque, esse doloremque, laboriosam dicta?</p>
                <button className={classes.About_container_mainRight_btn}>Contact Him</button>
              </div>
            </Col>
          </Row>
          <Row className={classes.About_container_intro1}>
            <div className={classes.About_container_ColLeft1}>
              <div className={classes.About_container_mainLeft1}>
                <div className={classes.About_container_leftSides}>
                      <img src={ceoImg} />
                    <div className={classes.About_container_main_circle1}>
                      <h4>CEO</h4>
                      <p>M.Zohaib Iqbal</p>
                    </div>
                </div>
              </div>
            </div>
            <div className={classes.About_container_ColRight1}>
              <div className={classes.About_container_mainRight}>
              <h1>CEO's Message</h1>
                <h5>Muhammad Zohaib Iqbal</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi vitae repudiandae beatae cupiditate. Non, possimus facilis ut beatae inventore quod. Debitis corporis ea reiciendis pariatur ipsam blanditiis quia alias quam ad in! Harum dolores totam, rem voluptatibus praesentium quos. Impedit cum libero iste accusantium accusamus nobis nemo corporis et quasi! Distinctio consectetur optio blanditiis fuga aut numquam nostrum delectus provident amet illum, placeat commodi maxime aliquam officia eligendi officiis quo, tempora, perspiciatis eaque! Nobis esse, unde vitae quisquam labore voluptatibus ex maiores sit! Facilis laudantium illum quibusdam laborum praesentium ab molestias assumenda, est nemo ipsum eaque, esse doloremque, laboriosam dicta?</p>
                <button className={classes.About_container_mainRight_btn}>Contact Him</button>
              </div>
            </div>
          </Row>
          <Row className={classes.About_container_intro}>
            <Col lg={6} md={12} className={classes.About_container_ColLeft}>
              <div className={classes.About_container_mainLeft}>
                <div className={classes.About_container_leftSides}>
                      <img src={ceoImg} />
                    <div className={classes.About_container_main_circle}>
                      <h4>Director</h4>
                      <p>Mehwish Tahir</p>
                    </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} className={classes.About_container_ColRight}>
              <div className={classes.About_container_mainRight}>
                <h1>Director's Message</h1>
                <h5>Mehwish Tahir</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi vitae repudiandae beatae cupiditate. Non, possimus facilis ut beatae inventore quod. Debitis corporis ea reiciendis pariatur ipsam blanditiis quia alias quam ad in! Harum dolores totam, rem voluptatibus praesentium quos. Impedit cum libero iste accusantium accusamus nobis nemo corporis et quasi! Distinctio consectetur optio blanditiis fuga aut numquam nostrum delectus provident amet illum, placeat commodi maxime aliquam officia eligendi officiis quo, tempora, perspiciatis eaque! Nobis esse, unde vitae quisquam labore voluptatibus ex maiores sit! Facilis laudantium illum quibusdam laborum praesentium ab molestias assumenda, est nemo ipsum eaque, esse doloremque, laboriosam dicta?</p>
                <button className={classes.About_container_mainRight_btn}>Contact Her</button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default About