import React from 'react'
import classes from "./TheNav.module.css"
import { BsSearch } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";


const TheNav = () => {
  return (
    <>
    <nav className={classes.DashBoardNav}>
        <div className={classes.DashSearch}>
          <div className={classes.SearchMain}>
              <input className={classes.SearchInput} placeholder="Search..........." />
              <BsSearch className={classes.SearchIcon}/>
          </div>
        </div>
        <div className={classes.DashAdmin}>
          <div className={classes.AdminBox}>
              <div className={classes.AdminPic}>
                <AiOutlineUser className={classes.AdminIcon}/>
              </div>
              <h5 className={classes.AdminName}>Admin <MdKeyboardArrowDown className={classes.ArrowDown}/></h5>
          </div>
        </div>
    </nav>
    </>
  )
}

export default TheNav