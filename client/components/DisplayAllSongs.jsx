import React from 'react';
import $ from 'jquery';
import {displayAllSongs} from 'songActions';
import SingleSong from 'SingleSong';

const DisplayAllSongs = React.createClass({
  componentDidMount: function() {
    $.ajax({
      url: '/api/songs/',
      type: 'GET'
    })
    .done(function(songs) {
      console.log(songs);
      displayAllSongs(songs);
    })
  },

  render: function() {
    console.log('SONGS:', this.props.songs)
    return (
      <div>
        <h5>All Songs:</h5>
        <form>
          <input list="songs" name="song"/>
          <datalist id="songs">
            {this.props.songs ? this.props.songs.map(function(val, idx) {
              return <SingleSong key={idx} artistId={val.ArtistId} albumId={val.ProjectId} songId={val.id} title={val.title}/>
            }) : null}
          </datalist>
        </form>
      </div>
    )
  }
})

export default DisplayAllSongs;