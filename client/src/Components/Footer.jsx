import React from 'react'
import classes from "./Footer.module.css"
import { Container, Col, Row } from "react-bootstrap"
import FoooterLogo from "../images/logo.png"
import { BsFacebook, BsTwitter, BsInstagram, BsGoogle } from "react-icons/bs";



const Footer = () => {
    return (
        <>
            <Container fluid className={classes.MainFooter} >
                <footer>
                    <Row>
                        <Col className={classes.Box} xl={4}>
                            <div className={classes.Footer_logo}>
                                {/* <img className={classes.footer_img} src={FoooterLogo} /> */}
                                <h2 style={{ color: "var(--primary-light)" }}>Web<span style={{ color: "rgb(248,34,73)" }}>Devrs</span></h2>
                            </div>
                            <p className={classes.followPara}>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet..</p>
                            <h3 className={classes.Folllow}>Follow Us</h3>
                            <div className={classes.FootersocialIcons}>
                                <div className={classes.Footer_Socialicon}>
                                    <BsFacebook />
                                </div>
                                <div className={classes.Footer_Socialicon}>
                                    <BsTwitter />
                                </div>
                                <div className={classes.Footer_Socialicon}>
                                    <BsGoogle />
                                </div>
                            </div>
                        </Col>
                        <Col className={classes.Box} xl={2}>
                        </Col>
                        <Col className={classes.Box} xl={2}>
                        </Col>
                        <Col className={classes.Box} xl={2}>
                        </Col>
                    </Row>
                </footer>
            </Container>
        </>
    )
}

export default Footer