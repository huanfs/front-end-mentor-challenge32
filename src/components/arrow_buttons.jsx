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
        left.current.addEventListener("click", ToLeft);
        right.current.addEventListener("click", ToRight);
    },[])
    function ToLeft(){
        if(Context.count<0){
            Context.setCount(0);
        }
        else{
            Context.setCount((prevCount)=>{return prevCount-1})
        }
        
    }
    function ToRight(){
        if(Context.count>2){
            Context.setCount(2)
        }
        else{
            Context.setCount((prevCount)=>{return prevCount+1})
        }
    }
    useEffect(()=>{
        console.log(Context.count)
    },[Context.count])
    return(
        <div className="Slider_buttons">
            <button type="button" ref={left}><img src={arrow_left}/></button>
            <button type="button" ref={right}><img src={arrow_right}/></button>
        </div>
    )
}

export default Arrow_buttons;
