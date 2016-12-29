import {connect} from 'react-redux';
import Home from 'Home';

const mapStateToProps = state => ({
  guardianData: state.apiReducer.guardianData
})

export const HomeContainer = connect(mapStateToProps)(Home);