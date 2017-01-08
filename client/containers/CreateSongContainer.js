import {connect} from 'react-redux';
import CreateSong from 'CreateSong';

const mapStateToProps = state => ({
  songTitle: state.formReducer.songTitle,
  artistName: state.formReducer.artistName,
  albumName: state.formReducer.albumName,
  releaseDate: state.formReducer.releaseDate
});

export const CreateSongContainer = connect(mapStateToProps)(CreateSong);