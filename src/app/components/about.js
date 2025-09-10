import Image from "next/image";
import '../styling/about.css';

export default function About() {
  return (
    <div className="about">
      <div className="description">
        <h3>who am i?</h3>
        <ul className="text">
          <li>aspiring software engineer</li>
          <li>
            <a
              href="https://cs.uwaterloo.ca/"
              className="important"
              target="_blank"
              rel="noopener noreferrer"
            >
              cs @ University of Waterloo
            </a>
          </li>
        </ul>
        <h3>what else?</h3>
        <ul className="text">
          <li>
            ❤️ robotics (shoutout to{" "}
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
          <li>hobbies: working out, manhwa and anime</li>
        </ul>
        <h3>recent!</h3>
        <ul className="text">
          <li>
            won 🥇 + $1K @{" "}
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
            solo best pitch @{" "}
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
            released{" "}
            <a
              href="https://obsidian.md/plugins?id=pixel-pets"
              className="important"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixel Pets
            </a>{" "}
            - 800+ downloads
          </li>
        </ul>
      </div>
      <div className="more">
        <div className="resume-github">
          <h3>see my...</h3>
        </div>
        <figure className="image-me">
          <Image
            src="/frc_dcmp_2025.JPG"
            alt="lucas as a part of the drive team at dcmp 2025"
            width={100}
            height={100}
          ></Image>{" "}
          {/* approx width and height for scaling */}
          <figcaption>part of frc 8729&apos;s drive team at dcmp!</figcaption>
        </figure>
      </div>
    </div>
  );
}
