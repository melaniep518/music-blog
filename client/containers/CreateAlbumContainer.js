import {connect} from 'react-redux';
import CreateAlbum from 'CreateAlbum';

const mapStateToProps = state => ({
  albumName: state.formReducer.albumName,
  releaseDate: state.formReducer.releaseDate,
  artistName: state.formReducer.artistName
});

export const CreateAlbumContainer = connect(mapStateToProps)(CreateAlbum);