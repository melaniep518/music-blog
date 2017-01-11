import {connect} from 'react-redux';
import DisplayPlaylists from 'DisplayPlaylists';

const mapStateToProps = state => ({
  playlists: state.playlistReducer.playlists
})

export const DisplayPlaylistsContainer = connect(mapStateToProps)(DisplayPlaylists);