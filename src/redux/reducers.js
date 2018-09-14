import { combineReducers } from 'redux';
import * as types from './actionTypes';

function exReducer(state = null, action) {
  switch (action.type) {
    case types.type: {
      return action.x;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  ex: exReducer,
});
