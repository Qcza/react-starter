// @flow
import { connect } from 'react-redux';
import App from '../components/App';
import { changeColor } from '../redux/actions';
import type { State } from '../types/state';
import type { Dispatch } from '../types/redux';

type Props = {
  color: string,
}

type Dispatches = {
  changeColor: (color: string) => Dispatch
}

const mapStateToProps = (state: State): Props => ({
  color: state.color,
});

const mapDispatchToProps = (dispatch: Dispatch): Dispatches => ({
  changeColor: color => dispatch(changeColor(color)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
