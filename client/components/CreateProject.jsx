import React from 'react';
import $ from 'jquery';

const CreateAlbum = (props) => {
  return (
    <div>
      <form>
        Album name: <input type="text" name="albumName"  placeholder="Album name"/><br/>
        Album release date: <input type="text" name="albumReleaseDate"  placeholder="Album release date"/><br/>
        Album artist: <input type="text" name="albumArtist"  placeholder="Album artist"/><br/>
        <input type="submit" name="createAlbumSubmit" value="Submit"/>
      </form>
    </div>
  )
}

export default CreateAlbum;