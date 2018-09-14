import { connect } from 'react-redux';
import App from '../components/App';
import { exAction } from '../redux/actions';

const mapStateToProps = state => ({
  ex: state.ex,
});

const mapDispatchToProps = dispatch => ({
  doEx: x => dispatch(exAction(x)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
