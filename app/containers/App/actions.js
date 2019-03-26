/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import {
  LOAD_PHRASES,
  LOAD_PHRASES_SUCCESS,
  LOAD_PHRASES_ERROR,
} from './constants';

/**
 * @description Load the phrases, this action starts the request saga
 * @return {object} An action object with a type of LOAD_PHRASES
 */
export function loadPhrases() {
  return {
    type: LOAD_PHRASES,
  };
}

/**
 * @description Dispatched when the phrases are loaded by the request saga
 * @param  {array} phrases The phrases data
 * @return {object} An action object with a type of LOAD_PHRASES_SUCCESS passing the phrases
 */
export function phrasesLoaded(phrases) {
  return {
    type: LOAD_PHRASES_SUCCESS,
    phrases,
  };
}

/**
 * Dispatched when loading the phrases fails
 * @param  {object} error The error
 * @return {object} An action object with a type of LOAD_PHRASES_ERROR passing the error
 */
export function phrasesLoadingError(error) {
  return {
    type: LOAD_PHRASES_ERROR,
    error,
  };
}
