import React from 'react'
import { Container, Row } from 'react-bootstrap'
import classes from "./DashBoard.module.css"
import SideBar from './SideBar'
import TheNav from './TheNav'

const DashBoard = () => {
    return (
        <>
            <SideBar />
            <Container fluid className={classes.MainDashBoard}>
                <TheNav/>
                Admin Data there we add
            </Container>
        </>
    )
}

export default DashBoard
