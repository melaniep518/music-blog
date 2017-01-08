import React from 'react';
import $ from 'jquery';
import {createNewSong} from 'formActions';

const CreateSong = (props) => {

  function handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      url: '/api/songs',
      type: 'POST',
      data: {
        artistName: props.artistName,
        songTitle: props.songTitle,
        projectName: props.songAlbum,
        releaseDate: props.releaseDate
      }
    })
  };

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    createNewSong(name, value);
    console.log('ALBUM:', props.releaseDate)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Song title: <input type="text" name="songTitle" placeholder="Song title"  onChange={handleChange}/><br/>
        Song artist: <input type="text" name="artistName" placeholder="Song artist" onChange={handleChange}/><br/>
        Song album: <input type="text" name="songAlbum" placeholder="Song album" onChange={handleChange}/><br/>
        Album release date: <input type="text" name="releaseDate" placeholder="Album release date" onChange={handleChange}/><br/>
        <input type="submit" name="createSongSubmit" value="Submit" />
      </form>
    </div>
  )
};

export default CreateSong;