import "./styling/home.css"
import Image from 'next/image';
import Button from "./components/button";
import Link from "next/link";
import { skillsList } from "./components/skillsList"

export default function Home() {
  return (
    <div className="original">
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
        <figure className="image-me">
          <Image src="/frc_dcmp_2025.JPG" alt="lucas as a part of the drive team at dcmp 2025" width={1200} height={800}></Image> {/* approx width and height for scaling */}
          <figcaption>part of frc 8729&apos;s drive team at dcmp!</figcaption>
        </figure>
      </div>
      <div className="more">
        <div className="resume-github">
          <h2>
            see my...
          </h2>
          <Button></Button>
        </div>
        <div className="skills">
            <h2>my skills</h2>
            <div className="grouped-skills">
            {
              skillsList.map((item, index) => (
                <Link key={index} href={`/portfolio?tag=${encodeURIComponent(item.link.toLowerCase())}`}>
                  {item.skill}
                </Link>
              ))
            }
            </div>
        </div>
      </div>
    </div>
  );
}
