import React,{ useState, useEffect, useContext } from "react";

/*images*/
import logo from "../assets/images/logo.svg";
/*components*/ 

/*context*/
import MyContext from "./myContext.js";
import Mobile_menu from "./mobile_menu.jsx";
function Header(){

/*context*/
const Context = React.useContext(MyContext);

useEffect(()=>{
    Context.setWidth(window.innerWidth);
},[Context.width])

    return(
        <header>
          {Context.width<=500?<Mobile_menu/>:null}
          <img src={logo} className="Logo"/>
        </header>
    )
}

export default Header;