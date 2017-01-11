import React from 'react';

// Renders the data for a single playlist, on click sets the state to the title prop of the current playlist
const SinglePlaylist = (props) => {
  return(
    <div>
      <h2>{props.title}</h2>
    </div>
  )
};

export default SinglePlaylist;