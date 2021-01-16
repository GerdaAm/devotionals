import React from 'react';
import devotionals from '../devotionals';
import createNote from "./createNote";

function App() {
  return (
    <div>
      <h1>
        <span>Daily Devotionals</span>
      </h1>
      <dl className='dictionary'>{devotionals.map(createNote)}</dl>
    </div>
  );
}

export default App;
