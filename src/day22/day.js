import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./style.css";
import { menu } from "./utils";

const google = "https://google.com";

const Day22 = () => {
    const [high,setHigh]=useState(null)
    const handleEnter=(e)=>{
        const position = e.target.getBoundingClientRect();
        const coords={
            width:position.width,
            height:position.height,
            X:position.left,
            Y:position.top+window.scrollY,
        }
        high.style.width=`${coords.width}px`;
        high.style.height=`${coords.height}px`;
        high.style.transform=`translate(${coords.X}px,${coords.Y}px)`;
    }

    const makeElement=()=>{
        const span = document.createElement("span");
        span.classList.add("highlight")
        document.body.appendChild(span)
        setHigh(span)
    }
    
    useEffect(()=>{
        makeElement()
    },[])

  return (
    <>
      <nav>
        <ul className="menu">
            {menu.map((item,idx)=>{
                return <li key={idx}>
                    <a onMouseEnter={handleEnter} href={google}>{item}</a>
                </li>
            })}
        </ul>
      </nav>

      <div className="wrapper">
        <p>
          Lorem ipsum dolor sit amet, <a href={google}>consectetur</a>{" "}
          adipisicing elit. Est <a href={google}>explicabo</a> unde natus
          necessitatibus esse obcaecati distinctio, aut itaque, qui vitae!
        </p>
        <p>
          Aspernatur sapiente quae sint <a href={google}>soluta</a> modi, atque
          praesentium laborum pariatur earum <a href={google}>quaerat</a>{" "}
          cupiditate consequuntur facilis ullam dignissimos, aperiam quam
          veniam.
        </p>
        <p>
          Cum ipsam quod, incidunt sit ex <a href={google}>tempore</a> placeat
          maxime <a href={google}>corrupti</a> possimus{" "}
          <a href={google}>veritatis</a> ipsum fugit recusandae est doloremque?
          Hic, <a href={google}>quibusdam</a>, nulla.
        </p>
        <p>
          Esse quibusdam, ad, ducimus cupiditate <a href={google}>nulla</a>,
          quae magni odit <a href={google}>totam</a> ut consequatur eveniet sunt
          quam provident sapiente dicta neque quod.
        </p>
        <p>
          Aliquam <a href={google}>dicta</a> sequi culpa fugiat{" "}
          <a href={google}>consequuntur</a> pariatur optio ad minima, maxime{" "}
          <a href={google}>odio</a>, distinctio magni impedit tempore enim
          repellendus <a href={google}>repudiandae</a> quas!
        </p>
      </div>
    </>
  );
};

export default Day22;
