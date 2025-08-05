'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tag from "./tag"
import "../styling/card.css"
import { Github, SquareArrowUpRight, BookOpen } from 'lucide-react';


export default function Card( { title, description, image, links, tags, onTagClick } ) {
  const handleClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  const addHttps = (link) => {
    if (!link) {
      return null;
    }
    return link.startsWith("https://") ? link : `https://${link}`;
  }
  
    return (
      <div className="outer-container card">
        <a href={
          !links?.livesite || links.livesite.trim() === ""
            ? (!links?.github || links.github.trim() === ""
                ? "https://github.com/LucasHJin"
                : addHttps(links.github))
            : addHttps(links.livesite)
        } target="_blank" rel="noopener noreferrer">
          <div className="container">
            <div className="item image-card">
              {image.endsWith('.mp4') || image.endsWith('.webm') ? (
                <video
                  src={image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  width={500}
                  height={500}
                  className="card-video"
                />
              ) : (
                <Image src={image} alt="project image" width={500} height={500} />
              )}
            </div>
            <div className="other">
              <div className="other-padding">
                <div className="top">
                  <div className="item title">
                    <h3>{title}</h3>
                  </div>
                  <div className="item links">
                    {links?.github && 
                      <span onClick={() => handleClick(addHttps(links.github))}>
                        <Github className="project-link"/>
                      </span>
                    } 
                    {links?.devpost && 
                      <span onClick={() => handleClick(addHttps(links.devpost))}>
                        <BookOpen className="project-link" />
                      </span>
                    }
                    {links?.livesite && 
                      <span onClick={() => handleClick(addHttps(links.livesite))}>
                        <SquareArrowUpRight className="project-link" />
                      </span>
                    }
                  </div>
                </div>
                <div className="item description">
                  <p>{description}</p>
                </div>
                <div className="item tags">
                  {tags !== undefined && tags.length > 0 && tags.map((tag, index) => (
                    <Tag 
                      key={index} 
                      tag={tag} 
                      onClick={(e) => {
                        e.stopPropagation(); 
                        e.preventDefault(); // stops link opening
                        onTagClick && onTagClick(tag);
                      }}
                    /> // only if defined
                  ))}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
  
Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  links: PropTypes.shape({
    github: PropTypes.string,
    devpost: PropTypes.string,
    livesite: PropTypes.string
  }),
  tags: PropTypes.arrayOf(PropTypes.string),
  onTagClick: PropTypes.func
};

Card.defaultProps = {
  title: "Default",
  description: "Default",
  image: "/frc_dcmp_2025.JPG",
  links: {
    github: null,
    devpost: null,
    livesite: null,
  },
  tags: []
};