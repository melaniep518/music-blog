import {connect} from 'react-redux';
import CreateArtist from 'CreateArtist';

const mapStateToProps = state => ({
  artistName: state.formReducer.artistName
})

export const CreateArtistContainer = connect(mapStateToProps)(CreateArtist);