import Card from "../components/card";
import "../styling/projects.css"

export default function Projects() {
    return (
      <div>
        <h1 className="sr-only">My Projects</h1>
        <div className="projects">
          <Card></Card>
        </div>        
      </div>
    );
  }
  