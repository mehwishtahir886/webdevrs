import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Form, Button } from 'react-bootstrap';
import classes from "./Login.module.css"
<<<<<<< HEAD
import {Link} from "react-router-dom"
import {login} from "../Actions/userActions"
=======
import { Link } from "react-router-dom"
>>>>>>> 68786e4c2ec0364115d5c15577b81a858dc07e5c

const Login = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo } = userLogin

    const userLoginHandler=(e)=>{
        e.preventDefault()
        dispatch(login(email, password))
    }
    
    return (
        <>
            <Container fluid className={classes.MainLogin}>
                {/* <div className={classes.LoginOverlay}></div> */}
                <div className={classes.LoginForm}>
                    <div className={classes.LoginAlert}>
                        <h3 className={classes.Loginhead}> Log in</h3>
                    </div>
                    <Form className={classes.LoginFormm} onSubmit={userLoginHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={classes.loginLabel}>Email address</Form.Label>
<<<<<<< HEAD
                            <Form.Control className={classes.LoginPlace} type="email" placeholder="&f218;Enter email" onChange={(e) => setEmail(e.target.value)}/>
=======
                            <Form.Control className={classes.LoginPlace} type="email" placeholder="Enter email" />
>>>>>>> 68786e4c2ec0364115d5c15577b81a858dc07e5c
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={classes.loginLabel}>Password</Form.Label>
                            <Form.Control className={classes.LoginPlace} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button className={classes.LoginBtn} variant="primary" type="submit">
                            Login
                        </Button>
                        <p className={classes.LoginAlready}> Not a Member ? &nbsp;
                            <Link style={{ textDecoration: "none" }} to="/Signup">
                                <span style={{ color: "var(--primary-light)" }}>Click Here</span>
                            </Link>
                        </p>
                        <Link to="/Forgot">
                        <p className={classes.ForgetPass}>Forgot Password</p>
                        </Link>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default Login