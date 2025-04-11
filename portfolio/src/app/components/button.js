'use client';

import "../styling/button.css"
import { useState, useEffect, useRef } from "react";
import { TbRefresh } from "react-icons/tb";
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export default function Button() {
    const [view, setView] = useState("resume");
    const nodeRef = useRef(null);

    const changeView = () => {
      view === "resume" ? setView("github") : setView("resume");
    }

    const returnView = () => {
      return view === "resume" ? "/Lucas_Resume.pdf" : "https://github.com/LucasHJin";
    }
    

    return (
      <div className="button-layout">
        <a href={returnView()} className="button" target="_blank" rel="noopener noreferrer">
          <SwitchTransition>
            <CSSTransition
              key={view}
              timeout={300}
              classNames="fade"
              nodeRef={nodeRef}
            >
              <span ref={nodeRef}>{view}</span>
            </CSSTransition>
          </SwitchTransition>
        </a>
        <button onClick={changeView} className="refresh">
          <TbRefresh />
        </button>
      </div>
    );
  }
  