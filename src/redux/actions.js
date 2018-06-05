// @flow
import * as types from './actionTypes';
import type { ChangeColorAction } from '../types/actions';

export const changeColor = (color: string): ChangeColorAction => ({ type: types.CHANGE_COLOR, color });
