
import React from 'react'
import classes from './Homeabout.module.css';
import web from '../videos/web.mp4';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';



const Homeabout = () => {
//////////////////////////////




var video = undefined;

//define iframe in html



var ifrm = document.createElement("IFRAME"); 
ifrm.setAttribute("src", "http://cache4.asset-cache.net/xd/468140002.mp4?v=1&c=IWSAsset&k=2&d=72990B68305E4FDFEE95B69A879131BCD6D7111452E48A17C03F8342D660D5A451EBC1DEC2A827C9&b=RTdG"); 
ifrm.setAttribute("id", "vt");
ifrm.setAttribute("width","420");
ifrm.setAttribute("autoplay","false"); 
ifrm.setAttribute("height","345");
if( document.getElementsByClassName('iframevideo')[0]){
  document.getElementsByClassName('iframevideo')[0].appendChild(ifrm); 
}

//iframe load event
ifrm.onload = function() {
    var btnPlay = document.createElement("BUTTON");
    btnPlay.setAttribute("onclick", "play();");
    var t1 = document.createTextNode("PLAY ME");       
    btnPlay.appendChild(t1);                               
    document.body.appendChild(btnPlay);

    var btnPause = document.createElement("BUTTON");        
    btnPause.setAttribute("onclick", "pause();");
    var t2 = document.createTextNode("PAUSE ME");      
    btnPause.appendChild(t2);                              
    document.body.appendChild(btnPause);

    video = document.getElementById("vt").contentWindow.document.body.getElementsByTagName('video')[0];
}


//play stop methods
function play()
{
  if (video != undefined)
    video.play();
  return false;
}

function pause()
{
  if (video != undefined)
    video.pause();
  return false;
}





///////////////////////////
  return (
    <>

    <Container  className={classes.cont} >
        <div className={classes.two} >
            <div className={classes.twoimg}>
   

                <div className={classes.kp}>
                    <h2>About Company</h2>
                    <h1>We Work With You to 
                        Address Critical
                        Buisness priority
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores suscipit blanditiis molestias voluptatem? Cum magnam a quisquam ut laborum fugiat est, minus maiores iusto asperiores neque distinctio vitae beatae ratione.
                    </p>
                    <button>Read More...</button>
                </div>

            </div>
            <div className={`${classes.twoside} `} >

              <div className='iframevideo' style={{height:'20px',width:'20px'}} ></div>

              {/* <iframe id='vt' autoplay='false' height='100%' width='100%' src={web} frameborder="0" controls>
              </iframe> */}
                <button onClick={play()} id='btn' className={classes.btn}>Click</button>


              {/* <video className={classes.towside} height={"100%"} src={web} controls autoPlay loop></video> */}
            </div>
        </div>
    </Container>       


    </>
  )
}

export default Homeabout