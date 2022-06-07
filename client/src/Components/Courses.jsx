import React from 'react'
import classes from './Courses.module.css'
import { Container,Row,Col } from 'react-bootstrap'

const Courses = () => {
  return (
    <Container fluid className={classes.courses_container}>
        <Row style={{height: "100%"}}>
            <Col className={classes.courses_info}>
              <p>Front End Development</p>
              <p>HTML</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi velit tenetur expedita fugit ipsam porro!</p>
              <ul>
                <li>This is html</li>
                <li>This is html</li>
                <li>This is html</li>
              </ul>
            </Col>
            <Col className={classes.courses_St}>Sticky</Col>
        </Row>
    </Container>
  )
}

export default Courses