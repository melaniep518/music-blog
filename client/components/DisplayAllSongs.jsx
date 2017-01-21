import React from 'react';
import $ from 'jquery';
import {displayAllSongs} from 'songActions';
import SingleSong from 'SingleSong';

const DisplayAllSongs = React.createClass({
  componentDidMount: function() {
    $.ajax({
      url: '/api/songs/populated',
      type: 'GET'
    })
    .done(function(songs) {
      console.log(songs);
      displayAllSongs(songs);
    })
  },

  handleClick: function() {
    console.log('song test')
  },

  render: function() {
    console.log('SONGS:', this.props.songs)
    return (
      <div>
        <h5>All Songs:</h5>
          <ul id="songs">
            {this.props.songs ? this.props.songs.map(function(val, idx) {
              return <SingleSong key={idx} artist={val.Artist.name} artistId={val.ArtistId} albumId={val.ProjectId} songId={val.id} title={val.title} handleSongClick={this.handleClick}/>
            }, this) : null}
          </ul>
      </div>
    )
  }
})

export default DisplayAllSongs;