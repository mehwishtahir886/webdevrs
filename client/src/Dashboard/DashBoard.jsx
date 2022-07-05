import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import classes from "./DashBoard.module.css"
import SideBar from './SideNavbar'
import StudentTable from './StudentTable'
import TheNav from './TheNav'

const DashBoard = () => {
    const navigate = useNavigate()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    useEffect(() => {
      console.log(userInfo,"..")
      if (userInfo == null) {
        navigate("/login")
        console.log("login")
      }
    }, [userInfo])

    return (
        <>
            <SideBar />
            <Container fluid className={classes.MainDashBoard}>
                <TheNav/>
                <StudentTable/>
            </Container>
        </>
    )
}

export default DashBoard
