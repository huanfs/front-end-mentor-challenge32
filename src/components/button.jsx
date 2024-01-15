/*style*/
import "./button.scss";
/*icon*/
import arrow from "../assets/images/icon-arrow.svg";
function Button(){
    return(
        <button type="button">
            shop now <img src={arrow}/>
        </button>
    )
}

export default Button;