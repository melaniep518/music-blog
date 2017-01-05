import {connect} from 'react-redux';
import CreateSong from 'CreateSong';

const mapStateToProps = state => ({
  songTitle: state.formReducer.songTitle,
  songArtist: state.formReducer.songArtist,
  songAlbum: state.formReducer.songAlbum
});

export const CreateSongContainer = connect(mapStateToProps)(CreateSong);