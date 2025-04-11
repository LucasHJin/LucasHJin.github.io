'use client';
import Card from "../components/card";
import "../styling/projects.css"
import { useEffect } from "react";

// make a txt file with all the info and you can access that txt file with the info

export default function Projects() {
    const getText = async () => {
      try {
        const response = await fetch("/projects.txt");
        const text = await response.text();
        console.log("text decoded:", text);
      } catch (err) {
        console.error("Failed to fetch text file:", err);
      }
    };

    useEffect(() => {
      getText();
    }, []);
  
    return (
      <div>
        <h1 className="sr-only">My Projects</h1>
        <div className="projects">
          <div className="project">
            <Card 
            title="lucaslucalsduclasuclausjdfliajsdklfjasldkjfalsdfjlaskdjflkasdflasdfasdf" 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" 
            image="/frc_dcmp_2025.JPG" 
            links={{ github: "github.com", devpost: "devpost.com" }} 
            tags={["a", "b", "CD", "asdfasdfsdf", "asdfsadfasdfasdfasdfasdfasdfasdfasfasdfasdfasdfasdfasdff"]}
            ></Card>
          </div>
          <div className="project">
            <Card 
            title="lucaslucalsduclasuclausjdfliajsdklfjasldkjfalsdfjlaskdjflkasdflasdfasdf" 
            description="try's standard dummy text ever since the 1500s, when an unknown p" 
            image="/frc_dcmp_2025.JPG" 
            links={{ github: "github.com", devpost: "devpost.com" }} 
            tags={["a", "b", "CD", "asdfasdfsdf", "asdfsadfasdfasdfasdfasdfasdfasdfasfasdfasdfasdfasdfasdff"]}
            ></Card>
          </div>
          <div className="project">
            <Card 
            title="lucaslucalsduclasuclausjdfliajsdklfjasldkjfalsdfjlaskdjflkasdflasdfasdf" 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" 
            image="/frc_dcmp_2025.JPG" 
            links={{ github: "github.com", devpost: "devpost.com" }} 
            tags={["a", "b", "CD", "asdfasdfsdf", "asdfsadfasdfasdfasdfasdfasdfasdfasfasdfasdfasdfasdfasdff"]}
            ></Card>
          </div>
          <div className="project">
            <Card 
            title="lucaslucalsduclasuclausjdfliajsdklfjasldkjfalsdfjlaskdjflkasdflasdfasdf" 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" 
            image="/frc_dcmp_2025.JPG" 
            links={{ github: "github.com", devpost: "devpost.com" }} 
            tags={["a", "b", "CD", "asdfasdfsdf", "asdfsadfasdfasdfasdfasdfasdfasdfasfasdfasdfasdfasdfasdff"]}
            ></Card>
          </div>
        </div>        
      </div>
    );
  }
  