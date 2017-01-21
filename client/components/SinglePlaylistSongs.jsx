import React from 'react';

const SinglePlaylistSongs = props => {
  return (
    <h4>{props.playlist}</h4>
    <ul>
    {props.playlist.map(function(val, idx) {
      return (
        <li>{}</li>
      )
    })}
    </ul>
  )
}