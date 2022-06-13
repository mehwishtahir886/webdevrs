import React from 'react'
import classes from "./Logout.module.css"
import { Container, Form, Button } from "react-bootstrap"

const Logout = () => {
    return (
        <>
            <Container fluid className={classes.MainLogout}>
                <div className={classes.Logoutoverlay}></div>
                    <div className={classes.LogoutForm}>
                    <div className={classes.LogoutAlert}>
                        <h5 className={classes.LogoutHead}>Forget Password</h5>
                    </div>
                    <Form style={{width:"80%",marginLeft:"10%"}} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={classes.LogoutLabel}>Email address</Form.Label>
                            <Form.Control className={classes.LogoutPlace} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={classes.LogoutLabel}>Code</Form.Label>
                            <Form.Control className={classes.LogoutPlace} type="text" placeholder="Enter Code" />
                        </Form.Group>
                        <Button className={classes.LogoutBtn} variant="primary" type="click">
                            Next
                        </Button>

                    </Form>
                    </div>
            </Container>
        </>
    )
}

export default Logout