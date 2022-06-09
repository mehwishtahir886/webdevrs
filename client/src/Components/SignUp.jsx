import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import classes from "./SignUp.module.css"
const SignUp = () => {
  return (
    <>
    <Container fluid className={classes.Main_Signup}>
        <div className={classes.SignUpoverlay}></div>
        <div className={classes.Signupform}></div>
        <div className={classes.TextAnime}>
            <h3 className={classes.TextAnimate}>Welcome to Webdevrs .......</h3>
            <p className={classes.WelcomeSignup}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam fugit dolorum sapiente deserunt, magni, molestiae repellendus accusantium et reiciendis culpa sint consequatur itaque libero corrupti facere eaque laudantium dolorem ipsa.</p>
        </div>
    </Container>
    </>
  )
}

export default SignUp