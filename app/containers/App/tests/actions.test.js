import {
  LOAD_PHRASES,
  LOAD_PHRASES_SUCCESS,
  ADD_PHRASE,
  ADD_PHRASE_SUCCESS,
  SET_APP_ERROR,
  CLEAR_ERROR,
} from '../constants';

import {
  loadPhrases,
  phrasesLoaded,
  phrasesLoadingError,
  addPhrase,
  addPhraseCompleted,
  addPhraseError,
  clearAppError,
} from '../actions';

describe('App Actions', () => {
  const error = new Error('Some error occured');
  const errorAction = {
    type: SET_APP_ERROR,
    error,
  };

  it('loadPhrases should return the correct action object', () => {
    const expectedAction = {
      type: LOAD_PHRASES,
    };
    expect(loadPhrases()).toEqual(expectedAction);
  });

  it('phrasesLoaded should return the correct action object', () => {
    const phrases = [
      {
        id: 1,
        text: 'woot!',
        createdat: new Date(),
      },
      {
        id: 2,
        text: 'awesome!',
        createdat: new Date(),
      },
    ];
    const expectedAction = {
      type: LOAD_PHRASES_SUCCESS,
      phrases,
    };

    expect(phrasesLoaded(phrases)).toEqual(expectedAction);
  });

  it('phrasesLoadingError should return the correct action object', () => {
    expect(phrasesLoadingError(error)).toEqual(errorAction);
  });

  it('addPhrase should return the correct action object', () => {
    const text = 'newInput';
    const expectedAction = {
      type: ADD_PHRASE,
      text,
    };

    expect(addPhrase(text)).toEqual(expectedAction);
  });

  it('addPhraseCompleted should return the correct action object', () => {
    const expectedAction = {
      type: ADD_PHRASE_SUCCESS,
    };

    expect(addPhraseCompleted()).toEqual(expectedAction);
  });

  it('addPhraseError should return the correct action object', () => {
    expect(addPhraseError(error)).toEqual(errorAction);
  });

  it('clearError should return the correct action object', () => {
    const expectedAction = {
      type: CLEAR_ERROR,
    };

    expect(clearAppError()).toEqual(expectedAction);
  });
});
