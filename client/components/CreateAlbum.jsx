import React from 'react';
import $ from 'jquery';
import {createNewAlbum} from 'formActions';


const CreateAlbum = (props) => {

  function handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      url: '/api/albums',
      type: 'POST',
      data: {
        artistName: props.artistName,
        albumName: props.albumName,
        releaseDate: props.releaseDate
      }
    })
    .done(function() {
      console.log(props.albumName, 'by', props.artistName, 'has been added to Albums.')
    })
  };

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    console.log(props[name]);
    createNewAlbum(name, value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Album name: <input type="text" name="albumName"  placeholder="Album name" onChange={handleChange}/><br/>
        Album release date: <input type="text" name="releaseDate" placeholder="Album release date" onChange={handleChange}/><br/>
        Album artist: <input type="text" name="artistName"  placeholder="Album artist" onChange={handleChange}/><br/>
        <input type="submit" name="createAlbumSubmit" value="Submit"/>
      </form>
    </div>
  )
}

export default CreateAlbum;