import React from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
import navImg from '../images/Computer.gif'
import { AiOutlineMail,AiOutlinePhone,AiFillCaretDown } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavbarBanner = () => {
  return (
    <>
        
        <div className='navbar_main'>
            <div className='navbar_top'>
                <div className='top_part1'>
                  <div className='top_part2'>
                    <AiOutlineMail />
                    <div>webdevrs@gmail.com</div>
                    &nbsp; | &nbsp;</div>
                  <div className='top_part2'>
                    <IoLocationOutline />
                    <div>Hafeez center IT Tower</div>
                    &nbsp; | &nbsp; </div>
                  <div className='top_part2'>
                    <AiOutlinePhone />
                     <div>+9253735356</div>
                  </div>
                </div>
                <div className='top_part3'>
                  <FaUserCircle style={{fontSize: "25px"}} />
                  <span>Ahmad</span>
                  <AiFillCaretDown style={{fontSize: "10px"}} />
                </div>
            </div>

            <Navbar expand="lg">
              <Container fluid className='m-0'>
                <Navbar.Brand href="#home">
                  <img style={{width: "70px",height: "45px"}} src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto nav" style={{position: "absolute", right: "20px"}}>
                    <Nav.Link style={{marginLeft: "25px"}} href="#home">Home</Nav.Link>
                    <Nav.Link style={{marginLeft: "25px"}} href="#link">About</Nav.Link>
                    <Nav.Link style={{marginLeft: "25px"}} href="#link">Blog</Nav.Link>
                    <NavDropdown style={{marginLeft: "25px", padding: "0"}} title="Courses" id="basic-nav-dropdown">

                    <div className='coursesDropdown'>
                        <div className='coursesC'>
                          <div className='courseLanguage'>
                            <p>Frontend</p>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            <li>Tailwind css</li>
                            <li>Jquery</li>
                            <li>Git Hub</li>
                            <li>Redux</li>
                          </div>
                          <div className='courseLanguage'>
                            <p>Backend</p>
                            <li>Node Js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                          </div>
                          <div className='courseLanguage'>
                            <div className='MobileApplication'>
                              <p>Mobile Application</p>
                              <li>Flutter</li>
                              <li>React(native)</li>
                            </div>
                            <div className='Cloud'>
                              <p>Cloud</p>
                              <li>Docker.Heroku</li>
                              <li>Kubernetes</li>
                            </div>
                          </div>
                        </div>
                        <div className='coursesGif'>
                          <img src={navImg} />
                        </div>
                      </div>

                    </NavDropdown>
                    <Nav.Link style={{marginLeft: "20px"}} href="#link">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>

    </>
  )
}

export default NavbarBanner