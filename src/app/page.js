"use client";
import { useState } from "react";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Experiences from "./components/experiences";
import Other from "./components/other";

export default function Home() {
  const [active, setActive] = useState(null);

  const sections = [
    {
      title: "LUCAS JIN",
      content: About,
    },
    {
      title: "PORTFOLIO",
      content: Portfolio,
    },
    {
      title: "EXPERIENCES",
      content: Experiences,
    },
    { title: "OTHER", content: Other },
  ];

  return (
    <div className="container">
      {sections.map((section, i) => {
        let className = "section default";
        if (active === i) {
          className = "section active";
        } else if (active !== null) {
          className = "section inactive";
        }

        return (
          <div
            key={i}
            className={className}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <h2 className="vertical-text">{section.title}</h2>
            <div className="content">
              <section.content />
            </div>
          </div>
        );
      })}
    </div>
  );
}
