'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Zettelkasten() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tags, setTags] = useState([]);
    const [notes, setNotes] = useState([]);
    const [adjList, setAdjList] = useState({});

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }

    // const createAdjList = async (tags, notes) => {
    //   const adj = {};
    
    //   const addEdge = (u, v) => {
    //     // not existing yet
    //     if (!adj[u]) {
    //       adj[u] = [];
    //     }
    //     if (!adj[v]) {
    //       adj[v] = [];
    //     }
    //     // in existence
    //     if (!adj[u].includes(v)) {
    //       adj[u].push(v);
    //     }
    //     if (!adj[v].includes(u)) {
    //       adj[v].push(u);
    //     }
    //   };
    
    //   // add for tags and notes
    //   tags.forEach(tag => {
    //     tag.links.forEach(link => {
    //       addEdge(tag.name, link);
    //     });
    //   });
    
    //   notes.forEach(note => {
    //     note.links.forEach(link => {
    //       addEdge(note.name, link);
    //     });
    //   });
    
    //   setAdjList(adj);
    // };

    useEffect(() => {
      const fetchNotes = async () => {
        try {
          const res = await axios.get("http://localhost:5001/api/notes");
          setTags(res.data.tags);
          setNotes(res.data.notes);
          // createAdjList(res.data.tags, res.data.notes);

          setLoading(false);
        } catch (err) {
          console.error("Error fetching notes:", err.message);
          setLoading(false);
        }
      };

      fetchNotes();
    }, []);

    return (
      <div>
        <h1 className="sr-only">My Zettelkasten</h1>
        <h2>Tags</h2>
        <ul>
          {tags.map((tag) => (
            <li key={tag.path}>
              <strong>{tag.name}</strong>
              <br />
              Links to: {tag.links.join(", ") || "None"}
            </li>
          ))}
        </ul>
        <h2>Notes</h2>
        <ul>
          {notes.map((note) => (
            <li key={note.path}>
              <strong>{note.name}</strong>
              <br />
              Links to: {note.links.join(", ") || "None"}
            </li>
          ))}
        </ul>
        {/* <h2>Adjacency List</h2>
        <pre>{JSON.stringify(adjList, null, 2)}</pre> */}
      </div>
    );
}
  