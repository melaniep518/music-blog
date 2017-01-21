import React from 'react';

const SinglePlaylistSongs = props => {
  // console.log('PROPS:', props.currentPlaylist)
  
  let playlistSongs;

  props.currentPlaylist ? 
    playlistSongs = 
        <div>
          <h4>{props.currentPlaylistTitle}</h4>
          <ul>
          {props.currentPlaylist.map(function(val, idx) {
            return <li key={idx}>{val.title} -- {val.Artist.name}</li> 
          })}
        </ul>
      </div>
    : null

  return (
    <div>{playlistSongs}</div>
  )
}

export default SinglePlaylistSongs;

