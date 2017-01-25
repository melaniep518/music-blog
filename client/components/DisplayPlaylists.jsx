import React from 'react';
import $ from 'jquery';
import {displayPlaylists, updateCurrentPlaylist} from 'playlistActions';
import SinglePlaylist from 'SinglePlaylist';

// will send AJAX request to GET all playlists, map over them and render SinglePlaylist component for each index passing playlist properties
// as props for SinglePlaylist component
const DisplayPlaylist = React.createClass({
  
  componentDidMount: function() {
    // console.log('Mount');
    $.ajax({
      url: '/api/playlists/title',
      type: 'GET'
    })
    .done(function(playlists) {
      // console.log(playlists);
      displayPlaylists(playlists);
    })
  },

  handleClick: function(playlistData, e) {
    // console.log(playlistData);
    $.ajax({
      url: '/api/playlists/songs/' + playlistData.id,
      type: 'GET'
    })
    .done(function(playlist) {
      // console.log(playlist)
      let id = playlistData.id;
      let title = playlistData.title;
      updateCurrentPlaylist(playlist, title, id);
    })
  },

  render: function() {
    // console.log('PROPS:', this.props.playlists);
    return (
      <div>
        <h4>All Playlists:</h4>
          <ul id="playlists">
            {this.props.playlists ? this.props.playlists.map(function(val, idx) {
              return <SinglePlaylist key={idx} createdAt={val.createdAt} id={val.id} title={val.title} url={val.url} handlePlaylistClick={this.handleClick.bind(null, val)}/>          
              }, this) : null}
          </ul>
      </div>
    )
  }
})

export default DisplayPlaylist;

// 
