// @flow;
import { combineReducers } from 'redux';
import * as types from './actionTypes';
import { ChangeColorAction } from '../types/actions';
import type { State } from '../types/state';

function changeColorReducer(state: State = 'blueviolet', action: ChangeColorAction): State {
  switch (action.type) {
    case types.CHANGE_COLOR:
      return action.color;
    default:
      return state;
  }
}

export default combineReducers({
  color: changeColorReducer,
});
