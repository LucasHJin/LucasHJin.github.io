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
                incoming {' '}
                <a
                  href="https://cs.uwaterloo.ca/" 
                  className="important" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  cs @ University of Waterloo
                </a>
                {' '} (📍ottawa)
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
               ), hackathons, and building things
              </li>
              <li>
                hobbies: working out, manhwa and anime
              </li>
            </ul>
          <h2>recent!</h2>
            <ul className="text">
              <li>
                won 🥇 + $1K @ {' '}
                <a
                  href="https://www.hack404.dev/" 
                  className="important" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Hack404
                </a>
              </li>
              <li>
                solo best pitch @ {' '}
                <a
                  href="https://www.terrahacks.ca/" 
                  className="important" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Terrahacks
                </a>
              </li>
              <li>
                released {' '}
                <a
                  href="https://obsidian.md/plugins?id=pixel-pets" 
                  className="important" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  pixel pets
                </a>
                {' '} - 300+ downloads in &lt;1 week
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
