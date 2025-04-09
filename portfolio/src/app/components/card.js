import Tag from "../components/tag"
import "../styling/card.css"
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { AiOutlineExport } from "react-icons/ai";
import Link from "next/link";
import React from 'react';
import PropTypes from 'prop-types';

// make it only image (vertical), appear down when hovered

export default function Card( { title, description, image, links, tags } ) {
    return (
      <div className="outer-container card">
        <div className="container">
          <div className="item image">
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
                    <Link href={links.github} target="_blank" rel="noopener noreferrer" className="link">
                      <FaGithub />
                    </Link>
                  }
                  {links?.devpost && 
                    <Link href={links.devpost} target="_blank" rel="noopener noreferrer" className="link">
                      <SiDevpost />
                    </Link>
                  }
                  {links?.published && 
                    <Link href={links.published} target="_blank" rel="noopener noreferrer" className="link">
                      <AiOutlineExport />
                    </Link>
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
    published: PropTypes.string
  }),
  tags: PropTypes.arrayOf(PropTypes.string)
};

Card.defaultProps = {
  title: "Default",
  description: "Default",
  image: "../../../static/frc_dcmp_2025.JPG",
  links: {
    github: null,
    devpost: null,
    published: null,
  },
  tags: []
};