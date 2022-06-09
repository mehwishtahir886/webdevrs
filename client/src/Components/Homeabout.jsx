
import React from 'react'
import classes from './Homeabout.module.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import './Khch.module.css'


const Homeabout = () => {
  return (
    <>

    <Container className={classes.cont} >
        <div className={classes.two} >
            <div className={classes.twoimg}>
   
                <div className={classes.overlay}>
                <div className={classes.kp}>
                    <h2>About Company</h2>
                    <h1>We Work With You to 
                        Address Critical
                        Buisness priority
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores suscipit blanditiis molestias voluptatem? Cum magnam a quisquam ut laborum fugiat est, minus maiores iusto asperiores neque distinctio vitae beatae ratione.
                    </p>
                    <button>Click</button>
                </div>
                </div>
            </div>
            <div className={classes.twoside}></div>
        </div>
    </Container>       


    </>
  )
}

export default Abouthome