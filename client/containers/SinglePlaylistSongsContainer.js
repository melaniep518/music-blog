import {connect} from 'react-redux';
import SinglePlaylistSongs from 'SinglePlaylistSongs';

const mapStateToProps = state => ({
  currentPlaylist: state.playlistReducer.currentPlaylist,
  currentPlaylistTitle: state.playlistReducer.currentPlaylistTitle,
  currentPlaylistId: state.playlistReducer.currentPlaylistId
})

export const SinglePlaylistSongsContainer = connect(mapStateToProps)(SinglePlaylistSongs);