import React from "react";
import "./style.css";
import videoFile from "./assets/video.mp4"
import { useElevenContext } from "./ElevenContext";

const Day11 = ()=>{
    const {videoControl,videoButton} =useElevenContext();
    return(
    <div className="player">
        <video onClick={videoControl} className="player__video viewer" src={videoFile} ></video>
        <div className="player__controls">
          <div className="progress">
           <div className="progress__filled"></div>
          </div>
          <button onClick={videoButton} className="player__button toggle" title="Toggle Play">►</button>
          <input type="range" name="volume" className="player__slider" min="0" max="1" step="0.05" value="1"/>
          <input type="range" name="playbackRate" className="player__slider" min="0.5" max="10" step="0.1" value="1"/>
          <button data-skip="-10" className="player__button">« 10s</button>
          <button data-skip="5" className="player__button">5s »</button>
        </div>
      </div>
    )
}

export default Day11;