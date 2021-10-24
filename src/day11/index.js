import React from "react";
import "./style.css";
import Day11 from "./Day11";
import ElevenProvider from "./ElevenContext";

const Eleven = ()=>{
    return(
        <ElevenProvider>
            <Day11 />
        </ElevenProvider>
    )
}

export default Eleven;