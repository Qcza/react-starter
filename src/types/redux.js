// @flow
import type { Action } from './actions';
import type { State } from './state';

export type GetState = () => State;
export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any; // eslint-disable-line no-use-before-define
export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;

