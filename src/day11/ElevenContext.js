import React, { createContext, useContext } from "react";

const ElevenContext = createContext();

const ElevenProvider = ({children})=>{

    const videoControl=(e)=>{
        const {target}=e;
        const control = target.paused?"play":"pause";
        target[control]();
    }

    const videoButton = (e)=>{
        const {target}=e;
        const control = target.paused?"▶️":"⏸";
        target.textContent=control;
    }

    return (
        <ElevenContext.Provider value={{videoControl,videoButton}}>
            {children}
        </ElevenContext.Provider>
    )
}

export const useElevenContext = ()=>{
    return useContext(ElevenContext)
}

export default ElevenProvider;