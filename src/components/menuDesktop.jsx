/*style*/
import "./menuDesktop.scss";
import logo from "../assets/images/logo.svg";
function MenuDesktop(){
    return(
        <nav>
            <img src={logo}/>
            <a href="#">home</a>
            <a href="#">shop</a>
            <a href="#">about</a>
            <a href="#">contact</a>
        </nav>
    )
}

export default MenuDesktop;