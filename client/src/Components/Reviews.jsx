import React from 'react';
import { useState } from 'react';
import Reviewsmy from './Reviewsmy';
import classes from './Reviews.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';


const Reviews = () => {


    const reviews = [
        {
            img: 'data:image/jpeg;base64,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',
            name: 'Awais Sabar',
            degree: 'double ma',
            message: 'my name is awaia , i am a awais i have four legs and two horns my color is pink and grey i join the webdevr for milk bla bla bla',
            stars: '',
            date: '10 December 2018',
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwgdK5p32xARCpLNxiN84mO57caIdIJJttg&usqp=CAU',
            name: 'Hassan Fareed',
            degree: 'Abhi Karni Ha ',
            message: 'my name is Hassan, i am a Hassan i have four or Three and one center horn i am start my carrier with webdevrs it is vary good bootcamp in the univers its building is so cool and so long my belive i will become  a superior student after completion my course because now i am still study in webdevrs thank you so much',
            stars: '',
            date: '18 May 2019',
        },
        {
            img: 'data:image/jpeg;base64,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',
            name: 'awais',
            degree: 'double ma',
            message: 'my name is awaia , i am a awais i have four legs and two horns my color is pink and grey i join the webdevr for milk bla bla bla',
            stars: '',
            date: '20 Augest 2019',
        },
        {
            img: 'data:image/jpeg;base64,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',
            name: 'awais',
            degree: 'double ma',
            message: 'my name is awaia , i am a awais i have four legs and two horns my color is pink and grey i join the webdevr for milk bla bla bla',
            stars: '',
            date: '7 July 2019',
        },
    ]

    const [rev, setRev] = useState(reviews);

    // console.log(rev);

    const ren = rev.map((item) => {
        // console.log(item ,'this is rev');
        return (
            <Reviewsmy rev={item} />
        )
    })



    return (
        <>

            <Navbar />

            <div className={classes.backg}>
                <div className={classes.backgo}></div>
                <div className={classes.backr} >

                <h1>Students Reviews</h1>
                <p>This is Reviews and experience of the webdevr students and alumni <br />
                   We always explore our students works and increase thair skills
                 </p>
                 
                </div>
              
            </div>


            <Container className={classes.revcon}>
                <Row>
                    {ren}
                </Row>
            </Container>

            <Footer />





        </>
    )
}

export default Reviews