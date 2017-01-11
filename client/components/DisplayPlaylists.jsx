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
      url: '/api/playlists/',
      type: 'GET'
    })
    .done(function(playlists) {
      console.log(playlists);
      displayPlaylists(playlists);
    })
  },

  render: function() {
    console.log('PROPS:', this.props.playlists);
    return (
      <div>
        <h1>All Playlists:</h1>
        {this.props.playlists ? this.props.playlists.map(function(val, idx) {
          return <SinglePlaylist key={idx} createdAt={val.createdAt} id={val.id} title={val.title} url={val.url} />
        }) : null}
      </div>
    )
  }
})

export default DisplayPlaylist;