import React from 'react'
import { Container, Row } from 'react-bootstrap'
import classes from "./DashBoard.module.css"
import SideBar from './SideBar'
import StudentTable from './StudentTable'
import TheNav from './TheNav'

const DashBoard = () => {
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
