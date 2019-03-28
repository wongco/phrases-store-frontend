/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_PHRASES,
  LOAD_PHRASES_SUCCESS,
  ADD_PHRASE,
  ADD_PHRASE_SUCCESS,
  SET_APP_ERROR,
  CLEAR_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  phrases: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PHRASES:
      return state.set('loading', true).set('error', false);
    case LOAD_PHRASES_SUCCESS:
      return state.set('phrases', action.phrases).set('loading', false);
    case ADD_PHRASE:
      return state.set('loading', true).set('error', false);
    case ADD_PHRASE_SUCCESS:
      return state.set('loading', false);
    case SET_APP_ERROR:
      return state.set('error', action.error).set('loading', false);
    case CLEAR_ERROR:
      return state.set('error', false);
    default:
      return state;
  }
}

export default appReducer;
