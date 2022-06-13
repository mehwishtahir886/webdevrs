import React from 'react'
import classes from './Faqs.module.css'
import { MdKeyboardArrowUp,MdKeyboardArrowDown } from "react-icons/md";

const Faqsmy = ({a,q}) => {
    console.log(a,q,'this is q and a');

    const [leng, setLeng] =React.useState(false);
    

  return (
    <>


<div className={classes.f}>

<div className={classes.fi} >


<h5>{q}</h5>

<div className={classes.btn} >


    <div onClick={()=> setLeng(!leng)} className={`${classes.fpm} pl `}>
        {leng ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}
    </div>

</div>

</div>


<div className={classes.fp}>
{
  leng &&  <p>{a}</p>
}
</div>

</div>


    </>
  )
}

export default Faqsmy




