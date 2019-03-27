/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_PHRASES = 'phrases-stores/App/LOAD_PHRASES';
export const LOAD_PHRASES_SUCCESS = 'phrases-stores/App/LOAD_PHRASES_SUCCESS';
export const LOAD_PHRASES_ERROR = 'phrases-stores/App/LOAD_PHRASES_ERROR';
export const ADD_PHRASE = 'phrases-stores/App/ADD_PHRASE';
export const ADD_PHRASE_SUCCESS = 'phrases-stores/App/ADD_PHRASE_SUCCESS';
export const ADD_PHRASE_ERROR = 'phrases-stores/App/ADD_PHRASE_ERROR';
