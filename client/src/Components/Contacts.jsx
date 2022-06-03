import React from 'react'
import {Container , Row, Col} from 'react-bootstrap';
// import Row from 
import classes from "./Contact.module.css"
import Navbar from './Navbar';
import "../Components/Navbar.css"


const Contacts = () => {
  return (
    <>
    <Navbar/>
    <Container fluid className={classes.Container_Contact}>
        <Row>
          <Col className={classes.Main_contact} xl={8} lg={8} md={8} sm={8}>
            <Row>
              <Col className={classes.Detail_contact} xl={5} lg={8}></Col>
            </Row>
          </Col>
        </Row>
    </Container>
    </>
  )
}

export default Contacts
