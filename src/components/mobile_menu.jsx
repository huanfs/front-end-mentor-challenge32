import { useState, useRef, useEffect } from "react";

/*menu icons*/ 
import menu_hamburger from "../assets/images/icon-hamburger.svg";
import menu_close from "../assets/images/icon-close.svg";

/*styles*/
import "./mobile_menu.scss";
function Mobile_menu(){

    /*state*/
    const[open, set] = useState(false);

    /*ref*/
    const menu = useRef(null);

    /*effect*/
    useEffect(()=>{
        open?menu.current.style.top="0px":menu.current.style.top="-80px";
    })
    return(
        <>
        <img src={open?menu_close:menu_hamburger}onClick={()=>set(!open)}/>
        <ol className="MobileMenu" ref={menu}>
            <li><a href="#">home</a></li>
            <li><a href="#">shop</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
        </ol>
            {/* {
            open?
                <ol className="MobileMenu MenuOpen">
                    <li><a href="#">home</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                </ol>
            :
                <ol className="MobileMenu MenuClose">
                    <li><a href="#">home</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                </ol>
            } */}

        </>
    )
}

export default Mobile_menu;