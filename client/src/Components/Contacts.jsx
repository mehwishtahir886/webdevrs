import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import "./Contact.module.css"
import classes from "./Contact.module.css"
import "./Navbar.css"
import Button from 'react-bootstrap/Button'


const Contacts = () => {
  return (
    <>
      <Container fluid className={classes.Container_Contact}>
        <Row>
          <Col className={classes.Main_contact} xl={7} lg={8} md={8} sm={8}>
            <Row>
              <Col className={classes.Detail_contact} xl={5} lg={5} md={5} sm={12} >
                <h3 className={classes.Contact_Name}>Contact Us</h3>
                <div className={classes.Detail_box}>
                  <i style={{ marginTop: "7px" }} className={`fa-solid fa-location-dot ${classes.Location_icon}`}></i>
                  <p className={classes.Details_li}>Main Gulberg-|||,Halli Road,IT Tower,Lahore</p>
                </div>
                <div style={{ display: "flex", marginTop: "15px" }}>
                  <i className={`fa-solid fa-envelope ${classes.Location_icon}`}></i>
                  <p className={classes.Details_li}>Webdevrshub@gmail.com</p>
                </div>
                <div style={{ display: "flex", marginTop: "15px" }}>
                  <i className={`fa-brands fa-whatsapp ${classes.Location_icon}`}></i>
                  <p style={{ marginLeft: "3px" }} className={classes.Details_li}>+92 3021446562</p>
                </div>
                <div style={{ display: "flex", marginTop: "15px" }}>
                  <i className={`fa-solid fa-mobile-screen-button ${classes.Location_icon}`}></i>
                  <p style={{ marginLeft: "5px" }} className={classes.Details_li}>+92 3056520720</p>
                </div>
                <div className={classes.SocialContact}>
                  <i className={`fa-brands fa-facebook ${classes.cont_Social}`}></i>
                  <i className={`fa-brands fa-twitter ${classes.cont_Social}`}></i>
                  <i className={`fa-brands fa-instagram-square ${classes.cont_Social}`}></i>
                  <i className={`fa-brands fa-linkedin-in ${classes.cont_Social}`}></i>
                </div>
              </Col>
              <Col className={classes.Form_box} xl={7} lg={8} md={8} sm={12}>
                  <h4 className={classes.getTouch}>Get in Touch</h4>
                  <p className={classes.FeelFree}>Feel free to drop us lines below</p>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className={classes.LabelName}>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter Name...." />
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
    </>
  )
}

export default Contacts
