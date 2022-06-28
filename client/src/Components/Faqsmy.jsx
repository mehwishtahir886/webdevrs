import React from 'react'
import classes from './Faqs.module.css'
import { MdKeyboardArrowUp,MdKeyboardArrowDown } from "react-icons/md";

const Faqsmy = ({a,q}) => {


    const [leng, setLeng] =React.useState(false);
 

  return (
    <>


<div onClick={()=> setLeng(!leng)} className={classes.f}>

<div className={classes.fi} onClick={()=> setLeng(!leng)}>
<h5>{q}</h5>
<div className={classes.btn} >
    <div className={`${classes.fpm} pl `}>
        {leng ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}
    </div>
</div>

</div>


<div className={classes.fp}>

{

  leng && <p>{a}</p>
  
}

</div>

</div>

    </>
  )
}

export default Faqsmy




