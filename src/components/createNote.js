import React from 'react';
import Note from './Note';

function createNote(note) {
    return (
      <Note
        key={note.id}
        heading={note.heading}
        date={note.date}
        scripture={note.scripture}
      />
    );
  }

export default createNote;