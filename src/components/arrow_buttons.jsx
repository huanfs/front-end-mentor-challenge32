import React, {useRef, useEffect, useState } from "react";
/*style*/
import "./arrow_buttons.scss";
/*icons*/
import arrow_left from "../assets/images/icon-angle-left.svg";
import arrow_right from "../assets/images/icon-angle-right.svg";
/*context*/
import MyContext from "./myContext.js";

function Arrow_buttons(){
    /*context*/
    const Context = React.useContext(MyContext);

    /*ref*/
    const right = useRef(null);
    const left = useRef(null);

    /*effect*/
    useEffect(()=>{
        console.log(Context.count)
        Context.count===0?left.current.style.opacity="0.8":left.current.style.opacity="1";
        Context.count===2?right.current.style.opacity="0.8":right.current.style.opacity="1";
    },[Context.count])
    return(
        <div className="Slider_buttons">
            <button type="button" ref={left} 
            onClick={()=>{
                Context.count<=0?Context.setCount(0):Context.setCount((prevCount)=>{return(prevCount-1)})
            }}>
                <img src={arrow_left}/>
            </button>
            <button type="button" ref={right} 
            onClick={()=>{
                Context.count>=2?Context.setCount(2):Context.setCount((prevCount)=>{return(prevCount+1)})
            }}>
                <img src={arrow_right}/>
            </button>
        </div>
    )
}

export default Arrow_buttons;
