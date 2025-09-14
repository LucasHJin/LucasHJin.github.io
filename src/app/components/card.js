import { Github, SquareArrowOutUpRight, BookOpenText } from "lucide-react";
import Image from "next/image";
import "../styling/card.css";

import Tag from "./tag";

export default function Card({ title, description, imageUrl, tags, links }) {
  return (
    <div className="card">
      <div className="img-wrapper">
        {imageUrl.includes(".mp4") ? (
          <video autoPlay loop muted className="card-img">
            <source src={imageUrl} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={imageUrl}
            alt={`Image for ${title}`}
            fill
            className="card-img"
          />
        )}
      </div>
      <div className="card-content">
          <div className="card-upper">
            <h4>{title}</h4>
            <div className="links">
              {links.map((link, index) => (
                <a
                  href={link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.includes("github.com") ? (
                    <Github />
                  ) : link.includes("devpost.com") ? (
                    <BookOpenText />
                  ) : (
                    <SquareArrowOutUpRight />
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className="card-desc">
            <p>{description}</p>
          </div>
          <div className="card-tags">
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>
      </div>
  );
}
