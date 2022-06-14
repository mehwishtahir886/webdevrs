import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Form, Button } from 'react-bootstrap';
import classes from "./SignUp.module.css"
import { Link } from 'react-router-dom';
import {register} from "../Actions/userActions"
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
         navigate("/login")
        }
      }, [navigate,userInfo])

    const userRegisterHandler=(e)=>{
        e.preventDefault()
        if (password !== confirmPassword) {
          setMessage('Passwords do not match')
        } else {
          dispatch(register(firstName,lastName, email, password))
        }
    }
    return (
        <>
        
            <Container fluid className={classes.Main_Signup}>
                <div className={classes.SignUpoverlay}></div>
                <div className={classes.Signupform}>
                    <div className={classes.AlertDiv}>
                        <h3 className={classes.Uphead}>Register</h3>
                    </div>
                    <Form className={classes.SignUpFormm} onSubmit={userRegisterHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={classes.Label}>Name</Form.Label>
                            <Form.Control className={classes.Plachold} type="text" placeholder="Enter Name" onChange={(e) => setFirstName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={classes.Label}>Last Name</Form.Label>
                            <Form.Control className={classes.Plachold} type="text" placeholder="Enter Last Name" onChange={(e) => setLastName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={classes.Label}>Email address</Form.Label>
                            <Form.Control className={classes.Plachold} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={classes.Label}>Password</Form.Label>
                            <Form.Control className={classes.Plachold} type="password" placeholder="Password"   onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={classes.Label}>Confirm-Password</Form.Label>
                            <Form.Control className={classes.Plachold} type="password" placeholder="Confirm-Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </Form.Group>
                        <Button className={classes.Upbtn} variant="primary" type="submit">
                            Signup
                        </Button>
                        <p className={classes.Already}> Already an Account ? &nbsp; 
                            <Link style={{textDecoration:"none"}} to="/login">
                            <span style={{color:"var(--primary-light)"}}>Click Here</span> 
                            </Link>
                        </p>
                        
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default SignUp