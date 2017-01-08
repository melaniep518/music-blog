import React from 'react';
import $ from 'jquery';
import {createNewArtist} from 'formActions';

const CreateArtist = (props) => {
  
  function handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      url: '/api/artists',
      type: 'POST',
      data: {
        artistName: props.artistName
      }
    });
    console.log('New artist POSTed');
  };

  function handleChange(e) {
    console.log(props.artistName)
    let name = e.target.name;
    let value = e.target.value;
    createNewArtist(name, value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Artist name: <input type="text" name="artistName"  placeholder="Artist name" onChange={handleChange} /><br/>
        <input type="submit" name="createArtistSubmit" value="Submit"/>
      </form>
    </div>
  )
};

export default CreateArtist;