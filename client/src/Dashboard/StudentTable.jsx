import React from 'react'
import Table from 'react-bootstrap/Table'
import classes from "./Table.module.css"
const StudentTable = () => {
  return (
    <div>
          <h3 className={classes.StudentHead}>Students Data</h3>
      <Table bordered hover>
  <thead className={classes.TableHead}>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Father Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Qalification</th>
      <th>Course</th>
      <th>Fees</th>
      <th>Time Slot</th>
    </tr>
  </thead>
  <tbody style={{borderTop:"none"}}>
    <tr>
      <td>1</td>
      <td>Awais</td>
      <td>Sabar</td>
      <td>Awais@gmail.com</td>
      <td>0305-6520720</td>
      <td>ADP(CS)</td>
      <td>Full-Stack</td>
      <td>0000</td>
      <td>Morning</td>
    </tr>
    <tr>
    <td>2</td>
      <td>Awais</td>
      <td>Sabar</td>
      <td>Awais@gmail.com</td>
      <td>0305-6520720</td>
      <td>ADP(CS)</td>
      <td>Full-Stack</td>
      <td>0000</td>
      <td>Morning</td>
    </tr>
    <tr>
    <td>3</td>
      <td>Awais</td>
      <td>Sabar</td>
      <td>Awais@gmail.com</td>
      <td>0305-6520720</td>
      <td>ADP(CS)</td>
      <td>Full-Stack</td>
      <td>0000</td>
      <td>Morning</td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}

export default StudentTable
