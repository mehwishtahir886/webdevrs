import React from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
import navImg from '../images/Computer.gif'
import { AiOutlineMail,AiOutlinePhone,AiFillCaretDown } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
        
        <div className='navbar_main'>
            <div className='navbar_top'>
                <div className='top_part1'>
                  <div className='top_part2'>
                    <AiOutlineMail />
                    <div>webdevrs@gmail.com</div>
                  </div>&nbsp; | &nbsp;
                  <div className='top_part2'>
                    <IoLocationOutline />
                    <div>Hafeez center IT Tower</div>
                  </div>&nbsp; | &nbsp;
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
            <div className='navbar-m'>
                <div className='logo'>
                  <img src={logo} />
                </div>
                <div className='navbar_nav'>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Courses<AiFillCaretDown style={{fontSize: "10px"}} /></a>
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
                      </li>
                      <li><a href="#">Blog</a></li>
                      <Link to="/Contact">
                      <li>Contact</li>
                      </Link>
                    </ul>
                </div>
            </div>
        </div>

    </>
  )
}

export default Navbar