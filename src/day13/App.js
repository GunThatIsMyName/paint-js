import React, { useEffect, useRef } from "react";
import { useDayContext } from "./DayContext";
import "./style.css"
import { lists } from "./utils";

const Day=()=>{
    const {handleScroll,imgRef}=useDayContext();

    function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function () {
            var context = this,
            args = arguments;
            var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    useEffect(()=>{
        window.addEventListener("scroll",debounce(handleScroll))
    },[])

    return(
        <div className="site-wrap">
        <h1>Slide in on Scroll</h1>
        {lists.map((item,idx)=>{
            return(
                <div key={idx} >
                <p>{item.p}</p>
                <p>{item.p}</p>
                <img ref={imgRef} src={item.src} alt={item.id} className="align-left slide-in active"/>
                </div>
            )
        })}
  
        <img
          alt="image0"
          src="http://unsplash.it/400/400"
          className="align-left slide-in"
        />
  
      </div>
    )
}

export default Day;