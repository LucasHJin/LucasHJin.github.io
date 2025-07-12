"use client";
import { WebringIcon } from "./icons/icons";
import { usePathname } from 'next/navigation';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MoveRight,
  MoveLeft,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Cat from "./cat";
import { useRef, useState, useEffect } from "react";

const ANIMATIONS = {
  idle: {
    name: "idle",
    spriteUrl: "/white-cat/idle-cat.png",
    frameCount: 7,
    frameWidth: 32,
    frameHeight: 32,
    duration: 700,
  },
  idle2: {
    name: "idle2",
    spriteUrl: "/white-cat/idle2-cat.png",
    frameCount: 14,
    frameWidth: 32,
    frameHeight: 32,
    duration: 1400,
  },
  jump: {
    name: "jump",
    spriteUrl: "/white-cat/jump-cat.png",
    frameCount: 13,
    frameWidth: 32,
    frameHeight: 32,
    duration: 1300,
  },
  run: {
    name: "run",
    spriteUrl: "/white-cat/run-cat.png",
    frameCount: 7,
    frameWidth: 32,
    frameHeight: 32,
    duration: 700,
  },
  sit: {
    name: "sit",
    spriteUrl: "/white-cat/sitting-cat.png",
    frameCount: 3,
    frameWidth: 32,
    frameHeight: 32,
    duration: 750,
  },
  sleep: {
    name: "sleep",
    spriteUrl: "/white-cat/sleep-cat.png",
    frameCount: 3,
    frameWidth: 32,
    frameHeight: 32,
    duration: 750,
  },
  die: {
    name: "die",
    spriteUrl: "/white-cat/die-cat.png",
    frameCount: 15,
    frameWidth: 32,
    frameHeight: 32,
    duration: 1500,
  },
};

export default function Footer() {
  const footerRef = useRef(null);
  const [bounds, setBounds] = useState(null);
  const path = usePathname();

  // Get the bounds of the footer to position the cat
  useEffect(() => {
    const updateBounds = () => {
      if (footerRef.current) {
        const width = footerRef.current.offsetWidth;
        setBounds({
          leftBound: 0,
          rightBound: width - 32,
        });
      }

    };

    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  return (
    <footer ref={footerRef}>
      {/* Render the cat above the footer */}
      {bounds && (
        <Cat
          key={`${path}-${bounds.leftBound}-${bounds.rightBound}`}
          leftBound={bounds.leftBound}
          rightBound={bounds.rightBound}
          moveDist={50}
          catType="white-cat"
          animations={ANIMATIONS}
        />
      )}

      <nav>
        <ul className="no-list">
          <li className="webring">
            <a
              href="https://cs.uwatering.com/#www.lucasjin.co?nav=prev"
              className="arrow"
            >
              <MoveLeft />
            </a>{" "}
            {/* fill in actual site info*/}
            <Link
              href="https://cs.uwatering.com/#www.lucasjin.co"
              target="_blank"
              className="wricon"
            >
              <WebringIcon />
            </Link>
            <a
              href="https://cs.uwatering.com/#www.lucasjin.co?nav=next"
              className="arrow"
            >
              <MoveRight />
            </a>
          </li>
          <li className="socials">
            <Link
              href="https://github.com/LucasHJin"
              target="_blank"
              rel="noopener noreferrer"
              className="nav"
            >
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/lucas--jin/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav"
            >
              <Linkedin />
            </Link>
            <Link
              href="https://x.com/lucashjin"
              target="_blank"
              rel="noopener noreferrer"
              className="nav"
            >
              <Twitter />
            </Link>
            <Link
              href="mailto:lucasjin.hh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav"
            >
              <Mail />
            </Link>
            <Link
              href="https://www.instagram.com/completely_fraudulent/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav"
            >
              <Instagram />
            </Link>
          </li>
        </ul>
      </nav>
      <h6 className="copyright">Lucas Jin © 2025</h6>
    </footer>
  );
}
