import React from 'react';
import $ from 'jquery';
import {createNewAlbum} from 'formActions';


const CreateAlbum = (props) => {

  function handleChange(e) {
    console.log(props.artistName);
    let name = e.target.name;
    let value = e.target.value;
    createNewAlbum(name, value);
  };

  return (
    <div>
      <form>
        Album name: <input type="text" name="albumName"  placeholder="Album name" onChange={handleChange}/><br/>
        Album release date: <input type="text" name="releaseDate" placeholder="Album release date" onChange={handleChange}/><br/>
        Album artist: <input type="text" name="artistName"  placeholder="Album artist" onChange={handleChange}/><br/>
        <input type="submit" name="createAlbumSubmit" value="Submit"/>
      </form>
    </div>
  )
}

export default CreateAlbum;