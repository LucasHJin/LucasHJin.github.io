import "./styling/home.css"
import Button from "./components/button";
import Zgraph from "./components/zgraph";

export default function Home() {
  return (
    <div>
      <div className="about">
        <div className="description">
          <p>who am i?</p>
          <ul>
            <li>
              ibdp student from merivale hs
            </li>
            <li>
              future cs @ ____
            </li>
            <li>
              passionate about robotics (shoutout to frc 8729), hackathons, and web dev
            </li>
          </ul>
          <p>what else?</p>
          <ul>
            <li>
              i love working out, manhwas, mangas, and light novels
              <ul>
                <li>
                  fun fact: i've made a real life replica of the dragonslayer from berserk
                </li>
              </ul>
            </li>
            <li>
              (league addict)
            </li>
          </ul>
          <div>
            <h3>my thoughts</h3>
            <Zgraph></Zgraph>
          </div>
        </div>
        
      </div>
      <div className="more">
        <Button></Button>
        <img src="https://media.istockphoto.com/id/117996443/photo/giant-panda-ailuropoda-melanoleuca.jpg?s=1024x1024&w=is&k=20&c=pO14aLauzlEfnzsF327a39fQM5E0reo6Nh2ZEER6zGo="></img>
      </div>
    </div>
  );
}
