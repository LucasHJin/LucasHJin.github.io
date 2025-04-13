import "./styling/home.css"
import Button from "./components/button";
import { FaReact, FaNodeJs, FaHtml5, FaJs, FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb, SiCss3, SiCplusplus } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

export default function Home() {
  return (
    <div>
      <h1 className="sr-only">About Me</h1> {/* only for screen readers */}
      <div className="about">
        <div className="description">
          <h2>who am i?</h2>
            <ul className="text">
              <li className="italic">
                aspiring software engineer
              </li>
              <li>
                <a 
                  href="https://www.ibo.org/programmes/diploma-programme/" 
                  className="important" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  ibdp
                </a>{' '} {/* for space */}
                student from merivale hs (📍ottawa)
              </li>
              <li>
                future cs @ {' '}
                <a
                  href="https://dictionary.cambridge.org/dictionary/english/tbd" 
                  className="important" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  ____
                </a>
              </li>
            </ul>
          <h2>what else?</h2>
            <ul className="text">
              <li>
              ❤️ robotics (shoutout to {' '}
                <a
                  href="https://syrc.ca/" 
                  className="important" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  frc 8729
                </a>
               ), hackathons, and web dev
              </li>
              <li>
                hobbies: working out, manhwa and anime (guess which {' '}
                <a
                  href="https://evangelion.fandom.com/wiki/Neon_Genesis_Evangelion" 
                  className="important" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  anime
                </a> {' '}
                inspired my color theme)
              </li>
            </ul>
          <h2>recent!</h2>
            <ul className="text">
              <li>
                competed at {' '}
                <a
                  href="https://www.thebluealliance.com/event/2025oncmp2#rankings" 
                  className="important" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  dcmp
                </a>
                , ranked #18/50 after quals
              </li>
            </ul>
        </div>
        <figure className="image">
          <img src="/frc_dcmp_2025.JPG" alt="lucas as a part of the drive team at dcmp 2025"></img>
          <figcaption>part of frc 8729's drive team at dcmp!</figcaption>
          </figure>
      </div>
      <div className="more">
        <div className="resume-github">
          <h2>
            see my...
          </h2>
          <Button></Button>
          <img className="signature"></img>
        </div>
        <div className="skills">
            <h2>my skills</h2>
            <div className="grouped-skills">
              <FaReact className="skill"/>
              <RiNextjsFill className="skill"/>
              <FaNodeJs className="skill"/>
              <IoLogoFirebase className="skill"/>
              <SiMongodb className="skill"/>
              <FaPython className="skill"/>
              <SiCplusplus className="skill"/>
              <PiFileSql className="skill"/>
              <FaJs className="skill"/>
              <FaHtml5 className="skill"/>
              <SiCss3 className="skill"/>
            </div>
        </div>
      </div>
    </div>
  );
}
