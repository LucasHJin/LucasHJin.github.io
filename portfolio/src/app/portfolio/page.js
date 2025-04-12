'use client';
import Card from "../components/card";
import "../styling/projects.css"
import { useEffect } from "react";
import information from "../data/projectsData.json"

// make a txt file with all the info and you can access that txt file with the info

export default function Portfolio() {

    return (
      <div>
        <h1 className="sr-only">My Projects</h1>
        <div className="projects">
          {
            information.map((item, index) => (
              <div className="project" key={index}>
                <Card {...item} /> {/* destructure because same format */}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
  