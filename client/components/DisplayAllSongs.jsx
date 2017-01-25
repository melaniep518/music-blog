import React from 'react';
import $ from 'jquery';
import {displayAllSongs} from 'songActions';
import SingleSong from 'SingleSong';
import {updateCurrentPlaylist} from 'playlistActions';

const DisplayAllSongs = React.createClass({
  componentDidMount: function() {
    $.ajax({
      url: '/api/songs/populated',
      type: 'GET'
    })
    .done(function(songs) {
      // console.log(songs);
      displayAllSongs(songs);
    })
  },

  handleClick: function(songData, e) {
    var that = this;
    console.log('SONG DATA:', songData)
    console.log(this.props.currentPlaylistId)
    $.ajax({
      url: `/api/playlists/song/${songData.id}/${this.props.currentPlaylistId}`,
      type: 'POST'
    })
    .done(function() {
      console.log(`${songData.title} has been added to playlist.` )
      $.ajax({
        url: `/api/playlists/songs/${that.props.currentPlaylistId}`,
        type: 'GET'
      })
      .done(function(playlist) {
        console.log(playlist);
        updateCurrentPlaylist(playlist)
      })
    })
  },

  render: function() {
    // console.log('SONGS:', this.props.songs)
    // console.log('CURR PLAY ID:', this.props.currentPlaylistId)
    return (
      <div>
        <h5>All Songs:</h5>
          <ul id="songs">
            {this.props.songs ? this.props.songs.map(function(val, idx) {
              return <SingleSong key={idx} artist={val.Artist.name} artistId={val.ArtistId} albumId={val.ProjectId} songId={val.id} title={val.title} handleSongClick={this.handleClick.bind(null, val)}/>
            }, this) : null}
          </ul>
      </div>
    )
  }
})

export default DisplayAllSongs;