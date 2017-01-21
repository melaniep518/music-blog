import React from 'react';

// Renders the data for a single playlist, on click sets the state to the title prop of the current playlist
const SinglePlaylist = (props) => {
  // onClick GET songs for playlist with GET to '/songs/:playlistId'
  // onClick event will send GET request then set a displayPlaylistSongs state which will be rendered onto the page
  // in displaySongs component onClick will send 2 AJAX requests, first a POST to update the DB and add song to playlist
  // then a GET to retrieve updated playlist and update the state which will trigger a re-render of the playlist songs
  // allowing the list to show updates in real time
  return(
    <li onClick={props.handlePlaylistClick}>{props.title}</li>
  )
};

export default SinglePlaylist;