import {connect} from 'react-redux';
import DisplayAllSongs from 'DisplayAllSongs';

const mapStateToProps = state => ({
  songs: state.songReducer.songs
});

export const DisplayAllSongsContainer = connect(mapStateToProps)(DisplayAllSongs);