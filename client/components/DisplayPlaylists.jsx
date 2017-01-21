import React from 'react';
import $ from 'jquery';
import {displayPlaylists} from 'playlistActions';
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
      console.log(playlists);
      displayPlaylists(playlists);
    })
  },

  handleClick: function(e) {
    console.log('test');
  },

  render: function() {
    console.log('PROPS:', this.props.playlists);
    let that = this;
    return (
      <div>
        <h5>All Playlists:</h5>
          <ul id="playlists">
            {this.props.playlists ? this.props.playlists.map(function(val, idx) {
              return <SinglePlaylist key={idx} createdAt={val.createdAt} id={val.id} title={val.title} url={val.url} handlePlaylistClick={this.handleClick}/>          
              }, this) : null}
          </ul>
      </div>
    )
  }
})

export default DisplayPlaylist;

// 
