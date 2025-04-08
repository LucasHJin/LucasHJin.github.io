import Tag from "../components/tag"
import "../styling/card.css"
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { AiOutlineExport } from "react-icons/ai";
import Link from "next/link";


export default function Card() {
    return (
      <div className="outer-container">
        <div className="container">
          <div className="item image">
            <img src="../static/frc_dcmp_2025.JPG"></img>
          </div>
          <div className="other">
            <div className="top">
              <div className="item name">
                <h3>Name</h3>
              </div>
              <div className="item links">
                <Link href="https://github.com/LucasHJin" target="_blank" rel="noopener noreferrer" className="link">
                  <FaGithub />
                </Link>
                <Link href="https://devpost.com" target="_blank" rel="noopener noreferrer" className="link">
                  <SiDevpost />
                </Link>
                <Link href="https://google.com" target="_blank" rel="noopener noreferrer" className="link">
                  <AiOutlineExport />
                </Link>
              </div>
            </div>
            <div className="item description">
              <p>descriptions</p>
            </div>
            <div className="item tags">
              <Tag></Tag>
            </div>
          </div>
        </div>
      </div>
    );
  }
  