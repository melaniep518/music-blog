import React from 'react';

// Renders the data for a single playlist, on click sets the state to the title prop of the current playlist
const SinglePlaylist = (props) => {
  console.log(props.id)
  return(
    <div>
      <h2>{props.title}</h2>
      <h3>{props.createdAt}</h3>
    </div>
  )
};

export default SinglePlaylist;