import React from 'react';

const SingleSong = (props) => {
  return (
    <li onClick={props.handleSongClick}>{props.title} -- {props.artist}</li>
  )
}

export default SingleSong;