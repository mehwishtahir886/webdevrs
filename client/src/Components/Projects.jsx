import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import classes from './Projects.module.css'
import classe from './Courses.module.css'
import Navbar from "./Navbar"
import Footer from "./Footer"
import { FiEye } from "react-icons/fi";



const projects = () => {

  return (
    <>
    <Navbar/>
        <Container fluid style={{marginTop: "50px",marginBottom: "50px", paddingLeft: " 0 5%"}}>

            <h1 className={classes.heading}>Student projects</h1>
            <p className={classes.para}>Our students build real-world projects to put theories into practice.</p>
            
            <Row className={classes.row}>
  <div className="mt-3">            
            <div className={classe.courses_St_Info3}>

<div>HTML</div>
<div>CSS</div>
<div>Javascript</div>
<div>React</div>
<div>Tailwind css</div>
<div>Git Hub</div>
<div>Bootstrap</div>
</div>
</div>  
            {/* <Button variant="primary" style={{backgroundColor: "rgb(25,67,118)"}}>View Course</Button> */}

            <Card className={classes.Card} style={{ width: '16rem',marginRight: "35px", marginTop: "30px", padding: "0",border: "none",borderRadius: "5px", boxShadow: "0px 0px 20px rgba(0,0,0,0.1)" }}>
                <Card.Img className={classes.Card_img}  variant="top" src="data:image/jpeg;base64,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" />
                <Card.Body>
                    <Card.Title className={classes.card_heading} style={{fontSize:"18px"}}>Project Name</Card.Title>
                    <Card.Text className={classes.card_para} style={{fontSize:"12px", marginBottom: "5px"}}>HTML, CSS</Card.Text>
                    <Card.Text className={classes.card_para} style={{fontSize:"14px", marginTop: "0"}}>In Frontend</Card.Text>
                    <button className={classes.courses_St_btn}> <FiEye style={{margingLeft: "5px"}} /> View</button>
                    <button className={classes.courses_St_btn}>Details</button>
                </Card.Body>
            </Card>

            <Card className={classes.Card} style={{ width: '16rem',marginRight: "35px", marginTop: "30px", padding: "0",border: "none",borderRadius: "5px", boxShadow: "0px 0px 20px rgba(0,0,0,0.1)" }}>
                <Card.Img className={classes.Card_img}  variant="top" src="https://sites.udel.edu/njimenez/files/2018/05/how-to-create-a-website-feature-image-e1496943224192-1yzdyp6.jpg" />
                <Card.Body>
                    <Card.Title className={classes.card_heading} style={{fontSize:"18px"}}>Project Name</Card.Title>
                    <Card.Text className={classes.card_para} style={{fontSize:"12px", marginBottom: "5px"}}>HTML, CSS</Card.Text>
                    <Card.Text className={classes.card_para} style={{fontSize:"14px", marginTop: "0"}}>In Frontend</Card.Text>
                    <button className={classes.courses_St_btn}> <FiEye /> View</button>
                    <button className={classes.courses_St_btn}>Details</button>
                </Card.Body>
            </Card>

            <Card className={classes.Card} style={{ width: '16rem',marginRight: "35px", marginTop: "30px", padding: "0",border: "none",borderRadius: "5px", boxShadow: "0px 0px 20px rgba(0,0,0,0.1)" }}>
                <Card.Img className={classes.Card_img}  variant="top" src="https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/08/28183850/home_post_2.gif" />
                <Card.Body>
                    <Card.Title className={classes.card_heading} style={{fontSize:"18px"}}>Project Name</Card.Title>
                    <Card.Text className={classes.card_para} style={{fontSize:"12px", marginBottom: "5px"}}>HTML, CSS</Card.Text>
                    <Card.Text className={classes.card_para} style={{fontSize:"14px", marginTop: "0"}}>In Frontend</Card.Text>
                    <button className={classes.courses_St_btn}> <FiEye /> View</button>
                    <button className={classes.courses_St_btn}>Details</button>
                </Card.Body>
            </Card>

            <Card className={classes.Card} style={{ width: '16rem',marginRight: "35px", marginTop: "30px", padding: "0",border: "none",borderRadius: "5px", boxShadow: "0px 0px 20px rgba(0,0,0,0.1)" }}>
                <Card.Img className={classes.Card_img}  variant="top" src="https://i0.wp.com/themes.svn.wordpress.org/web-design/1.2.0/screenshot.png" />
                <Card.Body>
                    <Card.Title className={classes.card_heading} style={{fontSize:"18px"}}>Project Name</Card.Title>
                    <Card.Text className={classes.card_para} style={{fontSize:"12px", marginBottom: "5px"}}>HTML, CSS</Card.Text>
                    <Card.Text className={classes.card_para} style={{fontSize:"14px", marginTop: "0"}}>In Frontend</Card.Text>
                    <button className={classes.courses_St_btn}> <FiEye /> View</button>
                    <button className={classes.courses_St_btn}>Details</button>
                </Card.Body>
            </Card>
            
            <Card className={classes.Card} style={{ width: '16rem',marginRight: "35px", marginTop: "30px", padding: "0",border: "none",borderRadius: "5px", boxShadow: "0px 0px 20px rgba(0,0,0,0.1)" }}>
                <Card.Img className={classes.Card_img}  variant="top" src="http://imagescdn.gettyimagesbank.com/500/19/693/065/0/1138140632.jpg" />
                <Card.Body>
                    <Card.Title className={classes.card_heading} style={{fontSize:"18px"}}>Project Name</Card.Title>
                    <Card.Text className={classes.card_para} style={{fontSize:"12px", marginBottom: "5px"}}>HTML, CSS</Card.Text>
                    <Card.Text className={classes.card_para} style={{fontSize:"14px", marginTop: "0"}}>In Frontend</Card.Text>
                    <button className={classes.courses_St_btn}> <FiEye /> View</button>
                    <button className={classes.courses_St_btn}>Details</button>
                </Card.Body>
            </Card>

            <Card className={classes.Card} style={{ width: '16rem',marginRight: "35px", marginTop: "30px", padding: "0",border: "none",borderRadius: "5px", boxShadow: "0px 0px 20px rgba(0,0,0,0.1)" }}>
                <Card.Img className={classes.Card_img}  variant="top" src="https://images.ctfassets.net/freurdme1ae3/2HCYLUixcXQ9kKNo3P6TYL/410c2da5e5ce204f2ff32e965a9187db/Website-Design-new.jpeg?w=2048&h=1152&q=80&fit=fill&f=face" />
                <Card.Body>
                    <Card.Title className={classes.card_heading} style={{fontSize:"18px"}}>Project Name</Card.Title>
                    <Card.Text className={classes.card_para} style={{fontSize:"12px", marginBottom: "5px"}}>HTML, CSS</Card.Text>
                    <Card.Text className={classes.card_para} style={{fontSize:"14px", marginTop: "0"}}>In Frontend</Card.Text>
                    <button className={classes.courses_St_btn}> <FiEye /> View</button>
                    <button className={classes.courses_St_btn}>Details</button>
                </Card.Body>
            </Card>

            <Card className={classes.Card} style={{ width: '16rem',marginRight: "35px", marginTop: "30px", padding: "0",border: "none",borderRadius: "5px", boxShadow: "0px 0px 20px rgba(0,0,0,0.1)" }}>
                <Card.Img className={classes.Card_img}  variant="top" src="https://img.freepik.com/vecteurs-libre/page-destination-conception-sites-web-dessin-anime_52683-70880.jpg?w=2000" />
                <Card.Body>
                    <Card.Title className={classes.card_heading} style={{fontSize:"18px"}}>Project Name</Card.Title>
                    <Card.Text className={classes.card_para} style={{fontSize:"12px", marginBottom: "5px"}}>HTML, CSS</Card.Text>
                    <Card.Text className={classes.card_para} style={{fontSize:"14px", marginTop: "0"}}>In Frontend</Card.Text>
                    <button className={classes.courses_St_btn}> <FiEye /> View</button>
                    <button className={classes.courses_St_btn}>Details</button>
                </Card.Body>
            </Card>
            
            <Card className={classes.Card} style={{ width: '16rem',marginRight: "35px", marginTop: "30px", padding: "0",border: "none",borderRadius: "5px", boxShadow: "0px 0px 20px rgba(0,0,0,0.1)" }}>
                <Card.Img className={classes.Card_img}  variant="top" src="data:image/jpeg;base64,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" />
                <Card.Body>
                    <Card.Title className={classes.card_heading} style={{fontSize:"18px"}}>Project Name</Card.Title>
                    <Card.Text className={classes.card_para} style={{fontSize:"12px", marginBottom: "5px"}}>HTML, CSS</Card.Text>
                    <Card.Text className={classes.card_para} style={{fontSize:"14px", marginTop: "0"}}>In Frontend</Card.Text>
                    <button className={classes.courses_St_btn}> <FiEye /> View</button>
                    <button className={classes.courses_St_btn}>Details</button>
                </Card.Body>
            </Card>
            
                
            </Row>
        </Container>
        <Footer/>


    </>
  )
}

export default projects