import {connect} from 'react-redux';
import DisplayAllSongs from 'DisplayAllSongs';

const mapStateToProps = state => ({
  songs: state.songReducer.songs,
  currentPlaylistId: state.playlistReducer.currentPlaylistId
});

export const DisplayAllSongsContainer = connect(mapStateToProps)(DisplayAllSongs);