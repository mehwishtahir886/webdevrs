import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import { AiOutlineHome, AiOutlineSetting,AiOutlineUser,AiOutlineIdcard,AiOutlineAppstoreAdd,AiOutlineTable ,AiOutlineRead} from "react-icons/ai";

import logo from "../images/logo.png"
// import ContentPage from "./ContentPage";

const SideNavbar = () => {
  let navigate = useNavigate();
  const NavigatePage=(link)=>{
    navigate(link)
  }
  return (
    <div>
      <nav className="side-navbar" id="side-navbar">
        {/* <div className="sidebar_toggle"><a href="#"><i className="icon-close icons"></i></a></div> */}
        <div className="main-menu">
          <div className="sidebar-header">
            <img
              className=" mb-0"
              src={logo}
              alt="User-Profile-Image"
            />
            {/* <div className="user-details">
                                  <span id="more-details">Ubaid Mehmood</span>
                              </div> */}
          </div>

          {/* -------------------------------------- */}
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingOne">
              <a 
                  className="accordion-button collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  onClick={()=>{NavigatePage("/dashboard")}}
                >
                  <span className="head-icon">
                    <i><AiOutlineHome/></i>
                  </span>
                  <span className="head-text">Dashboard</span>
                  <span className="plus"></span>
                </a>
              </li>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                {/* content */}
                </div>
            </ul>
            {/* -------------------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingTwo">
                    <a 
                  className="accordion-button collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                  onClick={()=>{NavigatePage("/dashboard/settings")}}
                >
                  <span className="head-icon">
                    <i><AiOutlineSetting/></i>
                  </span>
                  <span className="head-text">Settings</span>
                </a>
              </li>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
              </div>
            </ul>
            {/* -------------------------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingThree">
                     <a 
                  className="accordion-button collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                  onClick={()=>{NavigatePage("/dashboard/users")}}
                >
                  <span className="head-icon">
                    <i><AiOutlineUser/></i>
                  </span>
                  <span className="head-text">Users</span>
                  <span className="plus"></span>
                </a>
              </li>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                {/* content */}
                </div>
            </ul>
            {/* ----------------------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingFour">
                   <a 
                  className="accordion-button collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                  onClick={()=>{NavigatePage("/dashboard/projects")}}
                >
                  <span className="head-icon">
                   <i><AiOutlineTable/></i>
                  </span>
                  <span className="head-text">Projects</span>
                  <span className="plus"></span>
                </a>
              </li>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                        {/* content */}

                </div>
            </ul>
            {/* ------------------------------------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingFive">
                           <a 
                  className="accordion-button collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                  onClick={()=>{NavigatePage("/dashboard/payments")}}
                >
                  <span className="head-icon">
                    <i><AiOutlineIdcard/></i>
                  </span>
                  <span className="head-text">Payments</span>
                  <span className="plus"></span>
                </a>
              </li>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                              {/* content */}

                </div>
            </ul>
             {/* ----------------------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingSix">
              <a 
                  className="accordion-button collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                  onClick={()=>{NavigatePage("/dashboard/courses")}}
                >
                  <span className="head-icon">
                    <i><AiOutlineAppstoreAdd/></i>
                  </span>
                  <span className="head-text">Courses</span>
                  <span className="plus"></span>
                </a>
              </li>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample"
              >
                      {/* content */}

                </div>
            </ul>
             {/* ----------------------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingSeven">
                      <a 
                  className="accordion-button collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#flush-collapseSeven"
                  aria-expanded="false"
                  aria-controls="flush-collapseSeven"
                  onClick={()=>{NavigatePage("/dashboard/uploadData")}}
                >
                  <span className="head-icon">
                    <i><AiOutlineRead/></i>
                  </span>
                  <span className="head-text">Upload Data</span>
                  <span className="plus"></span>
                </a>
              </li>
              <div
                id="flush-collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingSeven"
                data-bs-parent="#accordionFlushExample"
              >
                        {/* content */}

                </div>
            </ul>
            {/* -------------------------------------------- */}

          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideNavbar;
