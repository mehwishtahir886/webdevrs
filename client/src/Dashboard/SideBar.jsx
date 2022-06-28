import React from 'react'
import classes from "./SideBar.module.css"

const SideBar = () => {
  return (
    <div className={classes.MainSide}>
      <div className={classes.DashLogo}><h3>Admin Panel</h3></div>
      <h5 className={classes.DashSideHead}>DashBoard</h5>
      <li>Students</li>
      <li>Projects</li>
      <li>Accounts</li>
      <li>Upload Project</li>
      <li>Admissions</li>
      <li>Employers</li>
      <li>Upload Blogs</li>
      <li>Visual Identity</li>
      <li>In Conservation</li>
    </div>
  )
}

export default SideBar
