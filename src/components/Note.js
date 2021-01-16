import React from 'react';

function Note(props) {
  return (
    <div className='term'>
      <dt>
        <span>{props.heading}</span>
      </dt>
      <dt>
        <span>{props.date}</span>
      </dt>
      <dd>{props.scripture}</dd>
    </div>
  );
}

export default Note;
