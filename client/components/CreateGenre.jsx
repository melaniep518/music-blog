import React from 'react';
import $ from 'jquery';

const CreateGenre = (props) => {
  return (
    <div>
      <form>
        Genre title: <input type="text" name="genreTitle"  placeholder="Genre title"/><br/>
        <input type="submit" name="createGenreSubmit" value="Submit"/>
      </form>
    </div>
  )
}

export default CreateGenre;