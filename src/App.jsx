import React,{ useContext, useState, useRef, useEffect} from "react";
/*style*/
import './App.css'

/*images (desktop)*/
import banner_1 from "./assets/images/desktop-image-hero-1.jpg";
import banner_2 from "./assets/images/desktop-image-hero-2.jpg";
import banner_3 from "./assets/images/desktop-image-hero-3.jpg";

/*images (mobile)*/
import banner_1mobile from "./assets/images/mobile-image-hero-1.jpg";
import banner_2mobile from "./assets/images/mobile-image-hero-2.jpg";
import banner_3mobile from "./assets/images/mobile-image-hero-3.jpg";

/*components*/
import Header from "./components/header.jsx";
import Arrow_buttons from "./components/arrow_buttons.jsx";
import Subtitle from "./components/subtitle.jsx";

/*context*/
import MyContext from "./components/myContext.js";

function App() {
  /*state*/
  const[width, setWidth] = useState(window.innerWidth);
  const[count, setCount] = useState(0);

  /*ref*/
  const slider = useRef();

  /*context*/
  const Context = React.useContext(MyContext);

  /*effect*/
  {slider?
    useEffect(()=>{
      if(count===0&&width<=500){
        slider.current.style.backgroundImage=`url(${banner_1mobile})`;
      }
      if(count===1&&width<=500){
        slider.current.style.backgroundImage=`url(${banner_2mobile})`;
      }
      if(count===2&&width<=500){
        slider.current.style.backgroundImage=`url(${banner_3mobile})`;
      }
      else if(count===0&&width>500){
        slider.current.style.backgroundImage=`url(${banner_1})`;
      }
      else if(count===1&&width>500){
        slider.current.style.backgroundImage=`url(${banner_2})`;
      }
      else if(count===2&&width>500){
        slider.current.style.backgroundImage=`url(${banner_3})`;
      }
    },[count]):null}

  return (
    <MyContext.Provider value={{count, setCount, width, setWidth}}>
      <section className="Slider" ref={slider}>
        <Header/> 
        <Arrow_buttons/>
      </section>
      <Subtitle/>
    </MyContext.Provider>
  )
}

export default App



