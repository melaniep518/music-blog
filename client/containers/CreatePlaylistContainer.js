import {connect} from 'react-redux';
import CreatePlaylist from 'CreatePlaylist';

const mapStateToProps = state => ({
  playlistTitle: state.formReducer.playlistTitle,
  playlistUrl: state.formReducer.playlistUrl
})

export const CreatePlaylistContainer = connect(mapStateToProps)(CreatePlaylist);