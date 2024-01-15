import React, { useState, useRef, useEffect, useContext } from "react";

/*components*/
import Button from "./button.jsx";

/*context*/
import MyContext from "./myContext.js";

/*style*/
import "./subtitle.scss";
function Subtitle(){
    /*context*/
    const Context = React.useContext(MyContext);

    /*ref*/
    const title = useRef(null)
    const subtitle = useRef(null)
    return(
        <section className="subtitle">
            <h1 ref={title}>
                {Context.count===0?Context.Data.titulo[0]:null}
                {Context.count===1?Context.Data.titulo[1]:null}
                {Context.count===2?Context.Data.titulo[2]:null}
            </h1>
            <p ref={subtitle}>
                {Context.count===0?Context.Data.subtitulo[0]:null}
                {Context.count===1?Context.Data.subtitulo[1]:null}
                {Context.count===2?Context.Data.subtitulo[2]:null}
            </p>
            <Button/>
        </section>
    )
}

export default Subtitle;