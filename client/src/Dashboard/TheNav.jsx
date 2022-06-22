import React from 'react'
import classes from "./TheNav.module.css"
import { BsSearch } from "react-icons/bs"

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
        <div className={classes.DashAdmin}></div>
    </nav>
    </>
  )
}

export default TheNav