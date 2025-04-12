'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Zettelkasten() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchNotes = async () => {
        try {
          const response = await axios.get('http://localhost:5001/api/notes');
          setNotes(response.data);
          setLoading(false); 
        } catch (err) {
          setError('Failed to fetch notes');
          setLoading(false);
          console.log(err);
        }
      };

      fetchNotes();
    }, []);


    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div>
        <h1 className="sr-only">My Zettelkasten</h1>
        <h2>Notes</h2>
        <ul>
          {notes.map(note => (
            <li key={note.path}>{note.name}</li> 
          ))}
        </ul>
      </div>
    );
}
  