'use client';

import "../styling/button.css"
import { useState, useEffect } from "react";
import { TbRefresh } from "react-icons/tb";

export default function Button() {
    const [view, setView] = useState("resume");
    const changeView = () => {
      view === "resume" ? setView("github") : setView("resume");
    }

    const returnView = () => {
      return view === "resume" ? "../../static/Lucas_Resume.pdf" : "https://github.com/LucasHJin";
    }
    

    return (
      <div>
        <a href={returnView()} className="button" target="_blank" rel="noopener noreferrer">{view}</a>
        <button onClick={changeView}>
          <TbRefresh />
        </button>
      </div>
    );
  }
  