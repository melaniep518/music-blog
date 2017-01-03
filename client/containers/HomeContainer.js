import {connect} from 'react-redux';
import Home from 'Home';

const mapStateToProps = state => ({
  guardianData: state.apiReducer.guardianData,
  nprData: state.apiReducer.nprData
})

export const HomeContainer = connect(mapStateToProps)(Home);