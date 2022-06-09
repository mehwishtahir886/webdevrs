import React from 'react'
import { Container } from 'react-bootstrap';
import classes from "./SignUp.module.css"
const SignUp = () => {
  return (
    <>
    <Container fluid className={classes.Main_Signup}>
        <div className={classes.SignUpoverlay}></div>
        <div className={classes.Signupform}></div>
    </Container>
    </>
  )
}

export default SignUp