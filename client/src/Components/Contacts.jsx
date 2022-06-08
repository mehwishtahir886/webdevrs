import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Navbar from "./Navbar"
import "./Contact.module.css"
import classes from "./Contact.module.css"
import "./Navbar.css"
import Button from 'react-bootstrap/Button'
import { BsFacebook, BsTwitter, BsInstagram, BsGoogle } from "react-icons/bs";
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineMobile } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Footer from './Footer';


const Contacts = () => {
  return (
    <>
      <Navbar />
      <Container fluid className={classes.Container_Contact}>
        <Row>
          <Col className={classes.Main_contact} xl={7} lg={8} md={8} sm={8}>
            <Row>
              <Col className={classes.Detail_contact} xl={5} lg={5} md={5} sm={5} >
                <h3 className={classes.Contact_Name}>Contact Us</h3>
                <div className={classes.Detail_box}>
                  <GoLocation className={classes.Location_icon} />
                  <p className={classes.Details_li}>Main Gulberg-|||,Halli Road,IT Tower,Lahore</p>
                </div>
                <div className={classes.lis_contact}>
                  <AiOutlineMail className={classes.Location_icon} />
                  <p className={classes.Details_li}>Webdevrshub@gmail.com</p>
                </div>
                <div className={classes.lis_contact}>
                  <AiOutlineWhatsApp className={classes.Location_icon} />
                  <p className={classes.Details_li}>+92 3021446562</p>
                </div>
                <div className={classes.lis_contact}>
                  <AiOutlineMobile className={classes.Location_icon} />
                  <p className={classes.Details_li}>+92 3056520720</p>
                </div>
                <div className={classes.SocialContact}>
                  <BsFacebook className={classes.cont_Social} />
                  <BsTwitter className={classes.cont_Social} />
                  <BsInstagram className={classes.cont_Social} />
                  <BsGoogle className={classes.cont_Social} />
                </div>
              </Col>
              <Col className={classes.Form_box} xl={7} lg={6} md={6} sm={6}>
                <h4 className={classes.getTouch}>Get in Touch</h4>
                <p className={classes.FeelFree}>Feel free to drop us lines below</p>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className={classes.LabelName}>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name...." />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className={classes.LabelName}>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className={classes.LabelName}>Drop your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button className={classes.sendbutton} as="input" type="submit" value="SEND" />
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}

export default Contacts
