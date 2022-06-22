import React from 'react'
import classes from "./SideBar.module.css"

const SideBar = () => {
  return (
    <div className={classes.MainSide}>
        <div className={classes.DashLogo}><h3>Admin Panel</h3></div>
      <h5 className={classes.DashSideHead}>DashBoard</h5>
                    <li className={classes.liActive}>All</li>
                    <li>Brand Startergy</li>
                    <li>Brand Support</li>
                    <li>Comminuactions</li>
                    <li>Culture</li>
                    <li>LeaderShip</li>
                    <li>News and Updates</li>
                    <li>Process</li>
                    <li>Visual Identity</li>
                    <li>In Conservation</li>
    </div>
  )
}

export default SideBar
