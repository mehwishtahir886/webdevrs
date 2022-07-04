import React,{useState} from 'react'
import img1 from "../images/Forms Background.png"
import img2 from "../images/Forms Background.png"
import {Carousel,Container, Button } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);
          
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }
    return (
        <header className="banner3">
<Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="banner3-img"></div>
                    <div class="heading1">
                    <h2>We Engineer your success</h2>
        <h1>Become a certified <br/>software & cloud Engineeer </h1>
        <p style={{"width":"500px"}}>Become A Certified Software & Cloud Engineer In 1 Year
With 360+ Hands-On Projects On Latest Technologies.
100% Job Placement with Starting Up To 6 Figure Salary.
Start Your First Week Free Trial Now
Hurry up & Enroll Yourself
Join WebDevrs & Take Your Career To The Next Level!</p>
        <button>Read more ...</button>
    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="banner3-img"></div>
                <div class="heading2">
        <h1>Create Your Future</h1>
        <h2>at our software engineering coding bootcamp</h2>
    </div>
                </Carousel.Item>
              </Carousel>
</header>
    )
}

export default Banner
