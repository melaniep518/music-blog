import React from 'react';
import $ from 'jquery';
import {createNewPlaylist} from 'formActions';


const CreatePlaylist = (props) => {

  function handleSubmit(e) {
    // clear field onSubmit
    e.preventDefault();
    $.ajax({
      url: '/api/playlists',
      type: 'POST',
      data: {
        title: props.playlistTitle,
        url: props.playlistUrl
      }
    })
  };

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    // this might need middleware
    createNewPlaylist(name, value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Playlist Title: <input type="text" name="playlistTitle" placeholder="Playlist Title" onChange={handleChange} /><br/>
        Playlist Url: <input type="text" name="playlistUrl" placeholder="Playlist Url" onChange={handleChange} /><br/>
        <input type="submit" name="createPlaylistSubmit" value="Submit" />
      </form>
    </div>
  )
}

export default CreatePlaylist;