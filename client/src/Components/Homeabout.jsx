import React from "react";
import classes from "./Homeabout.module.css";
import web from "../videos/web.mp4";
import imgg from "../images/imgg.png";
import { Container, Row, Col } from "react-bootstrap";

const Homeabout = () => {
  const openVideo = () => {
    document.getElementsByClassName("twovideotag")[0].style.display = "block";
  };
  const showBtn = () => {
    document.getElementsByClassName("twopause")[0].style.display = "block";
  };
  const hideBtn = () => {
    document.getElementsByClassName("twopause")[0].style.display = "none";
  };
  const closeVideo = () => {
    document.getElementsByClassName("twovideotag")[0].style.display = "none";
    document.getElementsByClassName("twopause")[0].style.display = "none";
  };
  return (
    <>
      <Container className={classes.cont}>
        <div className={classes.two}>
          <div className={classes.twoimg}>
            <div className={classes.kp}>
              <h2>About Company</h2>
              <h1>We Work With You to Address Critical Buisness priority</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae in animi quam tempore ducimus accusantium eligendi
                illum sed expedita, consectetur magni ea ut nesciunt porro rerum
                blanditiis, labore perspiciatis! Nam voluptatibus asperiores
                aperiam, totam ut architecto alias, hic, assumenda rerum velit
                doloribus quasi porro a et! Consequuntur nostrum mollitia
                architecto, dolor, cum fuga earum, molestias vel nobis ullam
                repudiandae vero!
              </p>
              <span>Read More...</span>
              <div className="d-flex justify-content-between">
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/13/11/42/audio-158489_960_720.png"
                  alt=""
                  onClick={openVideo}
                />
              </div>
            </div>

            <div className={classes.twovideo}>
              <video
                className="twovideotag"
                onMouseEnter={showBtn}
                onMouseLeave={hideBtn}
                playsinline="true"
                width="100%"
                style={{ "object-fit": "cover" }}
                autoplay="true"
                muted="true"
                loop="true"
                preload="auto"
                controls="true"
              >
                <source src={web} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
              <img
                className="twopause"
                onClick={closeVideo}
                onMouseEnter={showBtn}
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Homeabout;
