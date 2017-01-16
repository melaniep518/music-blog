import React from 'react';
import $ from 'jquery';
import {createNewPlaylist} from 'formActions';
import {displayPlaylists} from 'playlistActions';

const CreatePlaylist = React.createClass({

// clear input value on submit and display message that playlist has been added to db
   handleSubmit: function(e) {
    // clear field onSubmit
    e.preventDefault();
    $.ajax({
      url: '/api/playlists',
      type: 'POST',
      data: {
        title: this.props.playlistTitle,
        url: this.props.playlistUrl
      }
    })
    .done(function() {
      console.log('POST request sent.')
      $.ajax({
        url: '/api/playlists/title',
        type: 'GET'
      })
      .done(function(playlists) {
        console.log(playlists);
        displayPlaylists(playlists);
      })
    });
  },

  handleChange: function(e) {
    let name = e.target.name;
    let value = e.target.value;
    // this might need middleware
    createNewPlaylist(name, value);
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Playlist title: <input type="text" name="playlistTitle" placeholder="Playlist title" onChange={this.handleChange} /><br/>
          Playlist url: <input type="text" name="playlistUrl" placeholder="Playlist url" onChange={this.handleChange} /><br/>
          <input type="submit" name="createPlaylistSubmit" value="Submit" />
        </form>
      </div>
    ) 
  }
})

export default CreatePlaylist;