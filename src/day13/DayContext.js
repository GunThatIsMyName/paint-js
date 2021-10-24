import React, { createContext, useContext, useRef } from "react";

const DayContext = createContext();

const DayProvider = ({children})=>{
    const imgRef=useRef();
    const handleScroll=(e)=>{
        console.log(window.scrollY)
        console.log(imgRef.current,"current")
    }
    return(
        <DayContext.Provider value={{handleScroll,imgRef}}>
            {children}
        </DayContext.Provider>
    )
}

export const useDayContext = ()=>{
    return useContext(DayContext);
}

export default DayProvider;