import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import classes from "./SignUp.module.css"
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <>
        
            <Container fluid className={classes.Main_Signup}>
                <div className={classes.SignUpoverlay}></div>
                <div className={classes.Signupform}>
                    <div className={classes.AlertDiv}>
                        Sign Up
                    </div>
                    <Form className={classes.SignUpFormm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={classes.Label}>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={classes.Label}>Last Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter Last Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={classes.Label}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={classes.Label}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={classes.Label}>Confirm-Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm-Password" />
                        </Form.Group>
                        <Button className={classes.Upbtn} variant="primary" type="submit">
                            Signup
                        </Button>
                        <p className={classes.Already}> Already an Account ? &nbsp; 
                            <Link to="/login">
                            <span>Click Here</span> 
                            </Link>
                        
                        </p>
                        
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default SignUp