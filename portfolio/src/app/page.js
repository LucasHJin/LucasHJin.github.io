import "./styling/home.css"
import Button from "./components/button";
import Zgraph from "./components/zgraph";

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
                ibdp student from merivale hs (ottawa)
              </li>
              <li>
                future cs @ ____
              </li>
            </ul>
          <h2>what else?</h2>
            <ul className="text">
              <li>
                passionate about robotics (shoutout to frc 8729), hackathons, and web dev
              </li>
              <li>
                i love working out, manhwas, mangas, and light novels (nge and berserk are peak!!!)
              </li>
            </ul>
          <h2>recent!</h2>
            <ul className="text">
              <li>
                competed at dcmp, ranked #17/50 after quals
              </li>
            </ul>
        </div>
        <figure className="image">
          <img src="../static/frc_dcmp_2025.JPG" alt="lucas as a part of the drive team at dcmp 2025"></img>
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
        <div className="graph">
            <h2>my thoughts</h2>
            <Zgraph></Zgraph>
        </div>
      </div>
    </div>
  );
}
