'use client';
import Card from "../components/card";
import "../styling/portfolio.css"
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import information from "../data/projectsData.json"

// make clicking on tag filter as well

export default function Portfolio() {
    const [selectedTag, setSelectedTag] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const searchParams = useSearchParams();
    const routerTag = searchParams.get("tag");

    useEffect(() => {
      if (routerTag) {
        console.log("ROUTER", routerTag);
        setSelectedTag(routerTag);
      }
    }, [routerTag]);

    const reactExists = information.some(item =>
      item.tags.some(tag => tag === "React.js")
    );    

    // rules for normalizing tags (to be improved)
    const normalizeTag = (tag) => {
      if (["HTML", "CSS", "HTML/CSS"].includes(tag.toUpperCase())) {
        return "HTML/CSS";
      }

      if (tag.toUpperCase() === "REACT.JS" && !reactExists) {
        return "Next.js";
      }

      if (tag.toUpperCase().includes("SQL")) {
        return "SQL";
      }

      if (tag.toUpperCase() === "C++") {
        return "C++";
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
        ? item.tags.map((t) => normalizeTag(t).toLowerCase()).includes(selectedTag) // normalized tag map includes query
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
          <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
            <option value=""></option>
            {allTags.map((tag) => (
              <option key={tag.toLowerCase()} value={tag.toLowerCase()}>
                {tag}
              </option>
            ))}
          </select>
          </div>
        </div>

        <div className="projects">
          {
            filteredProjects.map((item, index) => (
              <Card key={index}
                {...item}
                onTagClick={(tag) => {
                  const normalizedTag = normalizeTag(tag).toLowerCase(); // check if same tag clicked
                  if (selectedTag == normalizedTag) {
                    setSelectedTag("");
                  } else {
                    setSelectedTag(normalizedTag); 
                  }
                }}
                /> 
            ))
          }
        </div>
      </div>
    );
  }
  