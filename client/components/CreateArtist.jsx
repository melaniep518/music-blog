import React from 'react';
import $ from 'jquery';

const CreateArtist = (props) => {
  return (
    <div>
      <form>
        Artist name: <input type="text" name="artistName"  placeholder="Artist name"/><br/>
        <input type="submit" name="createArtistSubmit" value="Submit"/>
      </form>
    </div>
  )
}

export default CreateArtist;