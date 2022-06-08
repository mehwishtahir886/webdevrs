import React from 'react'
import classes from "./Footer.module.css"
import { Container, Col, Row } from "react-bootstrap"
import FoooterLogo from "../images/logo.png"
import { BsFacebook, BsTwitter, BsInstagram, BsGoogle } from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa"



const Footer = () => {
    return (
        <>
            <Container fluid className={classes.MainFooter} >
                <footer>
                    <Row className={classes.footer}>
                        <Col className={classes.Box} xl={4} lg={4} >
                            <div className={classes.Footer_logo}>
                                {/* <img className={classes.footer_img} src={FoooterLogo} /> */}
                                <h2 style={{ color: "var(--primary-light)" }}>Web<span style={{ color: "rgb(248,34,73)" }}>Devrs</span></h2>
                            </div>
                            <p className={classes.followPara}>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do <br />
                                eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem <br />
                                ipsum dolor sit amet..</p>
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
                        <Col className={classes.Box} xl={2} lg={3}>
                            <h3 className={classes.FooterLink}>Our Services</h3>
                            <li>Marketing Strategy</li>
                            <li>Interior Design</li>
                            <li>Digital Services</li>
                            <li>Product Selling</li>
                            <li>Product Design</li>
                            <li>Social Marketing</li>

                        </Col>
                        <Col className={classes.Box} xl={3} lg={4}>
                            <h3 className={classes.FooterLink}>Company Address</h3>
                            <p>P1-40 ,IT.Tower , Hali Road ,Gulberg-||| , Lahore </p>
                            <p>
                                Address :54/1 New dhas sorini
                                Asut, Melbord Austria.
                            </p>
                            <p>
                                Phone :+92 3021446562
                            </p>
                            <p>
                                Email :webdevrs@gmail.com
                            </p>
                        </Col>
                        <Col className={classes.Box} xl={3}>
                            <h3 className={classes.FooterLink}>Subscribe</h3>
                            <p className={classes.subPara}>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            <div className={classes.subcribe}>
                                <input type="text" className={classes.SubEmail} placeholder="Enter Email..."/>
                            <button className={classes.Subbtn}><FaTelegramPlane className={classes.TEl}/></button>
                            </div>
                        </Col>
                    </Row>
                </footer>
                <hr className={classes.footerhr} />
                <p className={classes.copyright}>Copyright &copy; All right Reserved Webdevrs</p>
            </Container>
        </>
    )
}

export default Footer