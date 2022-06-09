import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import classes from "./Login.module.css"
import {Link} from "react-router-dom"

const Login = () => {
    return (
        <>
            <Container fluid className={classes.MainLogin}>
                <div className={classes.LoginOverlay}></div>
                <div className={classes.LoginForm}>
                    <div className={classes.LoginAlert}>
                        <h3 className={classes.Loginhead}>Login</h3>
                    </div>
                    <Form className={classes.LoginFormm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={classes.loginLabel}>Email address</Form.Label>
                            <Form.Control className={classes.LoginPlace} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={classes.loginLabel}>Password</Form.Label>
                            <Form.Control className={classes.LoginPlace} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button className={classes.LoginBtn} variant="primary" type="submit">
                            Login
                        </Button>
                        <p className={classes.LoginAlready}> Not a Member ? &nbsp; 
                            <Link style={{textDecoration:"none"}} to="/Signup">
                            <span style={{color:"var(--primary-light)"}}>Click Here</span> 
                            </Link>
                        </p>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default Login