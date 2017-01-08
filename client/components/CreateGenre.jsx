import React from 'react';
import $ from 'jquery';
import {createNewGenre} from 'formActions';

const CreateGenre = (props) => {
  
  function handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      url: '/api/genres',
      type: 'POST',
      data: {
        genreTitle: props.genreTitle
      }
    });
    console.log('Genre found or created');
  }

  function handleChange(e) {
    console.log(props.genreTitle)
    let name = e.target.name;
    let value = e.target.value;
    createNewGenre(name, value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Genre title: <input type="text" name="genreTitle"  placeholder="Genre title" onChange={handleChange}/><br/>
        <input type="submit" name="createGenreSubmit" value="Submit"/>
      </form>
    </div>
  )
}

export default CreateGenre;