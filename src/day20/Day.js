import React, { useEffect, useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./style.css";

const Day20 = () => {
  const [isListen, setIslisten] = useState(null);
  const useWords = useRef();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const startSpeeching = () => {
    console.log(isListen, "1");
    SpeechRecognition.startListening();
    console.log(isListen, "2");
  };
  const findsomething = (text) => {
    if (text.includes("구글")) {
      window.open("https://google.com");
    }
    if (text.includes("에러")) {
      alert("에러");
    }
    if (text.includes("날씨")) {
      const data = fetch("https://source.unsplash.com/random")
        .then((item) => item)
        .then((body) => console.log(body));
    }
  };
  const speakAgain = () => {
    let p = document.createElement("p");
    console.log(transcript);
    p.textContent = transcript;
    findsomething(transcript);
    useWords.current.appendChild(p);
  };
  useEffect(() => {
    setIslisten(listening);
    if (isListen) {
      startSpeeching();
      speakAgain();
    }
  }, [listening]);
  return (
    <div ref={useWords} className="words">
      <h1>Status : {listening ? "🔴🎤" : "🎤"}</h1>
      {!browserSupportsSpeechRecognition && (
        <h1>THIS BROWER DOSENT SUUPORT speech recognition</h1>
      )}
      <button onClick={startSpeeching}>start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>reset</button>
    </div>
  );
};

export default Day20;
