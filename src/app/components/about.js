"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "../styling/about.css";

export default function About() {
  const resumeRef = useRef(null);

  // Effect to handle mouse movement for flashlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!resumeRef.current) return;

      const rect = resumeRef.current.getBoundingClientRect();
      // Clamp cursor to the element rectangle
      const closestX = Math.max(rect.left, Math.min(e.clientX, rect.right));
      const closestY = Math.max(rect.top, Math.min(e.clientY, rect.bottom));

      const dx = e.clientX - closestX;
      const dy = e.clientY - closestY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const radius = 300;
      const opacity = Math.max(0, 1 - dist / radius);

      // Calculate relative position inside element for gradient
      const x = ((e.clientX - rect.left) / rect.width) * 100 + "%";
      const y = ((e.clientY - rect.top) / rect.height) * 100 + "%";

      resumeRef.current.style.background = `radial-gradient(
      circle at ${x} ${y},
      rgba(var(--accent-rgb), ${0.3 + 0.5 * opacity}) 0%,
      rgba(var(--accent-rgb), ${0.2 + 0.4 * opacity}) 40%,
      rgba(var(--accent-rgb), 0) 100%
    )`;
      resumeRef.current.style.webkitBackgroundClip = "text";
      resumeRef.current.style.webkitTextFillColor = "transparent";
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
        <div className="resume-wrapper">
          <h3 className="see">see my...</h3>
          <a
            href="/Lucas_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume flashlight-text"
            ref={resumeRef}
          >
            R E S U M E
          </a>
        </div>
      </div>
      <Image
        src="/me.tiff"
        alt="A profile picture of Lucas in China."
        width={100}
        height={100}
        className="profile-pic"
      ></Image>
    </div>
  );
}
