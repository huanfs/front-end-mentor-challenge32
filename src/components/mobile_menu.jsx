import { useState } from "react";

/*menu icons*/ 
import menu_hamburger from "../assets/images/icon-hamburger.svg";
import menu_close from "../assets/images/icon-close.svg";

/*styles*/
import "./mobile_menu.scss";
function Mobile_menu(){

    const[open, set] = useState(false);

    return(
        <>
        <img src={open?menu_close:menu_hamburger}onClick={()=>set(!open)}/>
            {
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
            }
        </>
    )
}

export default Mobile_menu;