'use client';
import Card from "../components/card";
import "../styling/portfolio.css"
import { useEffect, useState } from "react";
import information from "../data/projectsData.json"

export default function Portfolio() {
    const [selectedTag, setSelectedTag] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    // rules for normalizing tags (to be improved)
    const normalizeTag = (tag) => {
      if (["HTML", "CSS", "HTML/CSS"].includes(tag.toUpperCase())) {
        return "HTML/CSS";
      }
      return tag;
    };

    const tagCounts = {};
    information.forEach((item) => {
      item.tags.forEach((tag) => {
        const normalized = normalizeTag(tag);
        tagCounts[normalized] = (tagCounts[normalized] || 0) + 1;
      });
    });

    const allTags = Object.entries(tagCounts)
      .sort((a, b) => {
        const aIsAPI = a[0].toLowerCase().includes("api");
        const bIsAPI = b[0].toLowerCase().includes("api");
    
        if (aIsAPI && !bIsAPI) {
          return 1;
        }   // return a after b
        if (!aIsAPI && bIsAPI) {
          return -1;
        }  // return b after a
        // else sort by descending
        return b[1] - a[1];
      })
      .map(([tag]) => tag);

      const filteredProjects = information.filter((item) => {
        // filter for tags
        const matchesTag = selectedTag
          ? item.tags.map(normalizeTag).includes(selectedTag) // normalized tag map includes query
          : true; // true if nothing happens to pass filter
        // filter for search
        const matchesSearch = searchQuery
          ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) // title or description includes wanted query
          : true;
        return matchesTag && matchesSearch;
      });

    return (
      <div>
        <h1 className="sr-only">My Portfolio</h1>

        <div className="filter">
          <div className="searchbar">
            <input type="text" placeholder="search my projects..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          </div>
          <div className="tag-filters">
            <select onChange={(e) => setSelectedTag(e.target.value)}>
              <option value=""></option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="projects">
          {
            filteredProjects.map((item, index) => (
              <div className="project" key={index}>
                <Card {...item} /> {/* destructure because same format */}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
  