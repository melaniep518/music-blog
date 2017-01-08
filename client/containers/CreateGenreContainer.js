import {connect} from 'react-redux';
import CreateGenre from 'CreateGenre';

const mapStateToProps = state => ({
  genreTitle: state.formReducer.genreTitle
});

export const CreateGenreContainer = connect(mapStateToProps)(CreateGenre);