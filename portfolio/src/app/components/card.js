'use client';
import Tag from "../components/tag"
import "../styling/card.css"
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { AiOutlineExport } from "react-icons/ai";
import Link from "next/link";
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// change the inside links to div and use javascript? or button

export default function Card( { title, description, image, links, tags } ) {
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
          !links?.github || links.github.trim() === "" 
          ? "https://github.com/LucasHJin" 
          : addHttps(links.github)
        } target="_blank" rel="noopener noreferrer">
          <div className="container">
            <div className="item image-card">
              <img src={image}></img>
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
                        <FaGithub className="link"/>
                      </span>
                    } 
                    {links?.devpost && 
                      <span onClick={() => handleClick(addHttps(links.devpost))}>
                        <SiDevpost className="link" />
                      </span>
                    }
                    {links?.livesite && 
                      <span onClick={() => handleClick(addHttps(links.livesite))}>
                        <AiOutlineExport className="link" />
                      </span>
                    }
                  </div>
                </div>
                <div className="item description">
                  <p>{description}</p>
                </div>
                <div className="item tags">
                  {tags !== undefined && tags.length > 0 && tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
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
  tags: PropTypes.arrayOf(PropTypes.string)
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