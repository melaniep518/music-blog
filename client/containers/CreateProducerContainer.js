import {connect} from 'react-redux';
import CreateProducer from 'CreateProducer';

const mapStateToProps = state => ({
  producerName: state.formReducer.producerName
});


export const CreateProducerContainer = connect(mapStateToProps)(CreateProducer);

